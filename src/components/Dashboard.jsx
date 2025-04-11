import React from "react";
import "./Dashboard.css";
import st from "../assets/sta.png";
import bd from "../assets/bd.png";
import wed from "../assets/wed.png";
const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: st,
    description: "Supernatural mystery set in the 80s.",
  },
  {
    id: 2,
    title: "Breaking Bad",
    image: bd,
    description: "A chemistry teacher turns drug kingpin.",
  },
  {
    id: 3,
    title: "Wednesday",
    image: wed,
    description: "Dark coming-of-age mystery.",
  },
];

const Dashboard = ({ onMovieClick }) => {
  return (
    <div className="dashboard">
      <h2>Netflix Dashboard</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={() => onMovieClick(movie)}
          >
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
