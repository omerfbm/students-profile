import { useEffect, useState } from "react";
import StudentsList from "./components/StudentsList";
import SearchInput from "./components/SearchInput";

export const App = () => {
  const [students, setStudents] = useState([]);
  const [getStudents, setGetStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchNames, setSearchNames] = useState("");
  const [searchTags, setSearchTags] = useState("");

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((json) => {
        setStudents(
          json.students.map((student) => {
            const {grades} = student;
            console.log(student)
            return {
              ...student,
              average:
                grades.reduce((a, b) => parseInt(a) + parseInt(b)) /
                grades.length,
              tags: [],
            };
          })
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchNames.length === 0 && searchTags.length === 0) {
      setGetStudents(students);
      return;
    }

    const filtered = students.filter(({ firstName, lastName, tags }) => {
      const GetName =
        searchNames.length === 0 ||
        (firstName + " " + lastName)
          .toLowerCase()
          .includes(searchNames.toLowerCase());
      const GetTag =
        searchTags.length === 0 ||
        (tags.length > 0 &&
          tags.some((tag) =>
            tag.toLowerCase().includes(searchTags.toLowerCase())
          ));
      return GetName && GetTag;
    });

    setGetStudents(filtered);
  }, [students, searchNames, searchTags]);

  return (
    <>
      <SearchInput
        search={searchNames}
        setSearch={setSearchNames}
        placeholderText="Search by name"
      />
      <SearchInput
        search={searchTags}
        setSearch={setSearchTags}
        placeholderText="Search by tag"
      />
      <StudentsList
        loading={loading}
        getStudents={getStudents}
        setStudents={setStudents}
      />
    </>
  );
};
