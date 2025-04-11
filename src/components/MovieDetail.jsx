import React from "react";
import "./MovieDetail.css";

const MovieDetail = ({ movie, onBack }) => {
  return (
    <div className="movie-detail">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetail;
