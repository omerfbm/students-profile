import { useState } from "react";
import GradesList from "./AllGrades";
import TagsList from "./AllTags";

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
    <div>
      <div onClick={() => setDispayGrades((state) => !state)}>
        <img src={pic} alt={`${firstName} ${lastName}'s profile`} />
        <div>
          <div>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{displayGrades ? "-" : "+"}</p>
          </div>
          <p>{`Email: ${email}`}</p>
          <p>{`Company: ${company}`}</p>
          <p>{`Skill: ${skill}`}</p>
          <p>{`Average: ${average.toFixed(2)}`}</p>
        </div>
      </div>

      {displayGrades && <GradesList grades={grades} />}

      {tags.length > 0 && <TagsList tags={tags} />}

      <form onSubmit={addTag}>
        <input
          type="text"
          onChange={(e) => setTagInput(e.target.value)}
          value={tagInput}
          placeholder="Add a tag"
        />
      </form>
    </div>
  );
};

export default Student;
