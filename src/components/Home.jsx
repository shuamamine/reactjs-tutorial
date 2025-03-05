import { useState } from "react";
const Home = () => {
    // const handleClick = (e) => {
    //     console.log('hello Taylor', e);
    //   }
    
    //   const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    //   }
    const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(25);
  const handleClick = () => {
    // name = 'luigi';
    setName('Selena');
    setAge(30);
  }

    return ( 
    <>
        <div className="Home"> 
            <h2>Homepage</h2>
            {/* <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Selena', e)}>Click me again</button> */}
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    </> 
    );
}
 
export default Home;