import { useEffect, useState } from 'react'
import StudentsList from './components/StudentsList'
import SearchInput from './components/SearchInput'


const App = () => {
	const [students, updateStudents] = useState([])
	const [filteredStudents, updateFilteredStudents] = useState([])
	const [loading, setLoading] = useState(true)
	const [searchNames, setSearchNames] = useState("")
	const [searchTags, setSearchTags] = useState("")

	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
		.then(resp => resp.json())
		.then((jsonResp) => {
			updateStudents(
				jsonResp.students.map((student) => {
					const { grades } = student
					return {
						...student,
						average: grades.reduce( (a,b) => parseInt(a)+parseInt(b) , 0 ) / grades.length,
						tags: []
					}
				})
			)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		if (searchNames.length === 0 && searchTags.length === 0) {
			updateFilteredStudents(students)
			return
		}

		const filtered = students.filter(({ firstName, lastName, tags }) => {
			const nameMatch = searchNames.length === 0 || (firstName+ " " +lastName).toLowerCase().includes(searchNames.toLowerCase())
			const tagMatch = searchTags.length === 0 || (tags.length > 0 && tags.some(tag => tag.toLowerCase().includes(searchTags.toLowerCase())))
			return nameMatch && tagMatch
		})

		updateFilteredStudents(filtered)
	}, [students, searchNames, searchTags])

	return (
		<>
			<SearchInput search={searchNames} setSearch={setSearchNames} placeholderText="Search by name" />
			<SearchInput search={searchTags} setSearch={setSearchTags} placeholderText="Search by tag" />
			<StudentsList loading={loading} filteredStudents={filteredStudents} updateStudents={updateStudents} />
		</>
	)
}

export default App
