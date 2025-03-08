import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  // const handleClick = (e) => {
  //     console.log('hello Taylor', e);
  //   }
  //   const handleClickAgain = (name, e) => {
  //     console.log('hello ' + name, e.target);
  //   }
  //     const [name, setName] = useState('Taylor');
  //   const [age, setAge] = useState(25);
  //   const handleClick = () => {
  //     // name = 'luigi';
  //     setName('Selena');
  //     setAge(30);
  //   }

  // const [blogs, setBlogs] = useState(null)
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       if (!res.ok) { // error coming back from server
  //         throw Error('could not fetch the data for that resource');
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       setIsPending(false);
  //       setBlogs(data);
  //       setError(null);
  //     })
  //     .catch(err => {
  //       // auto catches network / connection error
  //       setIsPending(false);
  //       setError(err.message);
  //     })
  //   }, 1000);
  // }, [])

  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <>
      <div className="Home">
        {/* <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Selena', e)}>Click me again</button> */}
        {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
        {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
        {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title="Mario's Blogs" /> */}
        {/* <button onClick={() => setName('luigi')}>change name</button> */}
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
    </>
  );
};

export default Home;
