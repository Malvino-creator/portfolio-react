import React from 'react';
import {Link} from 'react-router-dom';



const handleClick = () => {
  
}
const Home = () =>{
  return (
    <div>
      <h1>
        Hello, I'm Malvin Opondo,
        <p>A Fullstack Software Engineer. </p>
        <Link to="/src/Components/home.js">
        <button className='btn'> Check my Work! </button>
        </Link>
      </h1>
    </div>
  )
}

export default Home;
