import { useState } from "react";
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

const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
    return ( 
    <>
        <div className="Home"> 
            <h2>Homepage</h2>
            {/* <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Selena', e)}>Click me again</button> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
        </div>
    </> 
    );
}
 
export default Home;