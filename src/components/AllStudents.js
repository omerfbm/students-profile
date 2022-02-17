import Student from "./Student";

const AllStudents = ({ loading, getStudents, setStudents }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (getStudents.length === 0) {
    return (
      <div className="flex items-center justify-center ">
        <h1 className="font-bold text-3xl">Not Found</h1>
      </div>
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
