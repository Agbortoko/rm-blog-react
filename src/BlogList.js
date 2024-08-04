const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <h2 className="text-center text-2xl font-semibold underline">{title}</h2>
      {blogs.map((blog) => (
        <div
          className="blog-preview shadow py-3 px-4 border hover:scale-105 hover:shadow-lg cursor-pointer transition-all delay-75 ease-in-out"
          key={blog.id}
        > 
          <h2 className="text-xl font-semibold text-center mb-4">
            {blog.title}
          </h2>
          <p className="text-center">Created By: {blog.author}</p>
          <button className="bg-red-500 hover:bg-red-600 transition-all delay-75 ease-in-out text-white py-2 px-3 block mx-auto mt-4 rounded-lg">Delete</button>
        </div>
      ))}
      ;
    </div>
  );
};

export default BlogList;
