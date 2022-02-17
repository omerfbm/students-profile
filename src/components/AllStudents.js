import Student from "./Student";

const AllStudents = ({ loading, getStudents, setStudents }) => {
  if (loading) {
    return (
      <li>
        <h1>Loading...</h1>
      </li>
    );
  }

  if (setStudents.length === 0) {
    return (
      <li>
        <h1>Not Found</h1>
      </li>
    );
  }

  return (
    <div>
      {getStudents.map((student) => (
        <Student
          key={student.email}
          updateStudents={setStudents}
          {...student}
        />
      ))}
    </div>
  );
};

export default AllStudents;
