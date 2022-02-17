import { useEffect, useState } from "react";
import AllStudents from "./components/AllStudents";
import SearchBar from "./components/SearchBar";

export const App = () => {
  const [students, setStudents] = useState([]);
  const [getStudents, setGetStudents] = useState([]);
  const [searchNames, setSearchNames] = useState("");
  const [searchTags, setSearchTags] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((response) => response.json())
      .then((json) => {
        setStudents(
          json.students.map((student) => {
            const { grades } = student;
            console.log(student);
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

    const searching = students.filter(({ firstName, lastName, tags }) => {
      const GetName = (firstName + " " + lastName)
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

    setGetStudents(searching);
  }, [students, searchNames, searchTags]);

  return (
    <>
      <SearchBar
        search={searchNames}
        setSearch={setSearchNames}
        placeholderText="Search by name"
      />
      <SearchBar
        search={searchTags}
        setSearch={setSearchTags}
        placeholderText="Search by tag"
      />
      <AllStudents
        loading={loading}
        getStudents={getStudents}
        setStudents={setStudents}
      />
    </>
  );
};
