import { useState } from "react";
import GradesList from "./GradesList";
import TagsList from "./TagsList";

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
  const [extended, toggleExtended] = useState(false);
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
    <card>
      <row onClick={() => toggleExtended((state) => !state)}>
        <img src={pic} alt={`${firstName} ${lastName}'s profile`} />
        <div>
          <row>
            <p>{`${firstName} ${lastName}`}</p>
            <p>{extended ? "-" : "+"}</p>
          </row>
          <text>{`Email: ${email}`}</text>
          <text>{`Company: ${company}`}</text>
          <text>{`Skill: ${skill}`}</text>
          <text>{`Average: ${average.toFixed(2)}`}</text>
        </div>
      </row>

      {extended && <GradesList grades={grades} />}

      {tags.length > 0 && <TagsList tags={tags} />}

      <form onSubmit={addTag}>
        <input
          type="text"
          onChange={(e) => setTagInput(e.target.value)}
          value={tagInput}
          placeholder="Add a tag"
        />
      </form>
    </card>
  );
};

export default Student;
