import "./index.css";
const AllGrades = ({ grades }) => {
  return (
    <div className="grades">
      <p className="my-5">Grades:</p>
      {grades.map((grade, i) => (
        <div key={i}>
          <div className="flex flex-wrap">
            <p className="mr-10">{`Test ${i + 1}:`}</p>
            <p>{`${grade}%`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllGrades;
