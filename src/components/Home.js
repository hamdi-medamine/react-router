import React,{useState} from 'react'
import {Data} from './Data'
import MovieList from './MovieList'
import Filter from './Filter'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const [movies, setMovies] = useState(Data)
    const [search, setSearch] = useState("");
    const [star, setStar] = useState(1)
    const [newMovie, setNewMovie] = useState({
    title: "",
    rate: "",
    description: "",
    img:"",
  })
  const Add = () =>{
    setMovies(
      [...movies,newMovie],
    )
    
  }
    
  
    return (
        <div>
            <Filter setSearch={setSearch} setStar={setStar}  />
     

          <MovieList  search={search} movies={movies.filter(elt=>elt.title.toLowerCase().trim().includes(search.toLowerCase().trim())&& elt.rate>=star)} setMovies={setMovies} />
        </div>
    )
}

export default Home
