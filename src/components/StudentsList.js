import Student from './Student'




const StudentsList = ({ loading, filteredStudents, updateStudents }) => {
    if (loading) {
        return <li><h1>Loading...</h1></li>
    }

    if (filteredStudents.length === 0) {
        return <li><h1>&#x1F50D; There are no results to display!</h1></li>
    }

    return (
        <li>
            {filteredStudents.map(student => <Student key={student.email} updateStudents={updateStudents} {...student} />)}
        </li>
    )
}

export default StudentsList
