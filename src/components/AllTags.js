const AllTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap ">
      <div className=" flex my-2   ">
        {tags.map((tag, i) => (
          <p className="mr-3 rounded-lg p-3 bg-slate-200 hover:bg-slate-400 cursor-pointer" key={tag}>
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AllTags;
