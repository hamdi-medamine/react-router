import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Data } from "./Data";

const Trailer = ({ match }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log(
      "test",
      Data.find((movie) => movie.id === +match.params.id)
    );
    setMovie(Data.find((movie) => movie.id === +match.params.id));
  }, [match]);

  return (
    <div className="Trailer">
      <h1>Movie Trailer</h1>
      <iframe
        src={movie.trailer}
        title="myMovie"
        width="853"
        height="480"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{padding:'50px 10px'}}>
      <p>{movie.description}</p>
      </div>
      
      <hr />
      <Link to="/">
        <Button variant="dark">Go Back</Button>
      </Link>
    </div>
  );
};

export default Trailer;
