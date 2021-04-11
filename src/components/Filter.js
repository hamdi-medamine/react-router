import React from "react";
import StarRatingComponent from "react-star-rating-component";


function Filter({setSearch,setStar}) {
  const handleChange = (e) => { 
  setSearch(e.target.value);
};



  return (
      <form action="input" className="search">
        <input placeholder='search a movie'
      
          onChange={handleChange}
      
          type="text" name="search"
        />
        
        <StarRatingComponent  onStarClick={(nextValue, prevValue, name)=>setStar(nextValue)} />
      </form>
    );
}

export default Filter;