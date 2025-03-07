const BlogList = ({blogs, title,handleDelete}) => {
    return ( 
    <>
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview p-2 md:p-4 my-5 border-b border-gray-100 hover:shadow-md transition-shadow" key={blog.id} >
          <h2 className="text-lg md:text-xl text-pink-500 mb-2">{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
        </div>
    </> 
    );
}
 
export default BlogList;