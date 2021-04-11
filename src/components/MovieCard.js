import React from 'react'
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component'
import { Link } from "react-router-dom";

function MovieCard({movie}) {
    return (
               
 <Card style={{ width: '18rem' }}>
     <Link to={`/Trailer/${movie.id}`}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>
    {movie.title} 
        </Card.Title>
    <StarRatingComponent value={movie.rate}/>
    <Card.Text>{movie.description}</Card.Text>
    
   
 </Card.Body>
 </Link>
</Card>

            
        
    )
}

export default MovieCard
