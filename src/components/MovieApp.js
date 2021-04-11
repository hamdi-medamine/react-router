import React,{useState} from 'react'
import Header from './Header'
import {Data} from './Data'
import MovieList from './MovieList'
import Filter from './Filter'
import AddMovies from './AddMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
function MovieApp() {
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
    
      <div className="App">
    
      <Header/>
     <Filter setSearch={setSearch} setStar={setStar}  />
     <AddMovies Add={Add} newMovie={newMovie} setNewMovie={setNewMovie}/>

     <MovieList search={search} movies={movies.filter(elt=>elt.title.toLowerCase().trim().includes(search.toLowerCase().trim())&& elt.rate>=star)} setMovies={setMovies} />
    

    </div>
  
  );
   }

export default MovieApp

