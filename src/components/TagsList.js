const TagsList = ({ tags }) => (
  <div>
    <row>
      {tags.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
    </row>
  </div>
);

export default TagsList;
