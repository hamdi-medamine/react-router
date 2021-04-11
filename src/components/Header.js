import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar">
      <div className='container'>
     <a href="#" className='logo'>Movie App</a>
     <ul>
       <a href='/'>Home</a>
       <a href='/movies'>Movies</a>
       <Link to='/AddMovies'>
       <a >Add movies</a>
       </Link>
       
     </ul>
     </div>
     
     
    </div>
  );
};

export default Header;