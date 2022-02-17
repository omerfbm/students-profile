import { useState } from "react";
import GradesList from "./AllGrades";
import AllTags from "./AllTags";

const Student = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  average,
  pic,
  grades,
  tags,
  updateStudents,
}) => {
  const [displayGrades, setDispayGrades] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const addTag = (e) => {
    e.preventDefault();
    const newTags = [...tags, tagInput];
    setTagInput("");
    if (tags.includes(tagInput)) return;

    updateStudents((students) => {
      return students.map((student) =>
        student.email !== email
          ? student
          : {
              firstName,
              lastName,
              email,
              company,
              skill,
              average,
              pic,
              grades,
              tags: newTags,
            }
      );
    });
  };

  return (
    <div className="border-b-2">
      <div className="text-sm py-2 relative">
        <img
          src={pic}
          alt={`${firstName} ${lastName}'s profile`}
          className="rounded-full border-2 h-28 w-28 absolute"
        />
        <div className="ml-40 font-medium info">
          <div className="flex items-center justify-between">
            <h2
              className="font-extrabold text-2xl   mr-2 Students"
              style={{ textTransform: "uppercase" }}
            >{`${firstName} ${lastName}`}</h2>
            <p
              className="text-5xl cursor-pointer"
              onClick={() => setDispayGrades((state) => !state)}
            >
              {displayGrades ? "-" : "+"}
            </p>
          </div>
          <p>{`Email: ${email}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Skill: ${skill}`}</p>
          <p>{`Average: ${average.toFixed(2)}`}</p>
          <div>{displayGrades && <GradesList grades={grades} />}</div>
          <div>{tags.length > 0 && <AllTags tags={tags} />}</div>
          <form onSubmit={addTag}>
            <input
              className="border-b-2 outline-none py-4"
              type="text"
              onChange={(e) => setTagInput(e.target.value)}
              value={tagInput}
              placeholder="Add a tag"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Student;
