import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleLogin = () => setPage("dashboard");

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setPage("movieDetail");
  };

  const handleBack = () => setPage("dashboard");

  return (
    <div>
      {page === "login" && <Login onLogin={handleLogin} />}
      {page === "dashboard" && <Dashboard onMovieClick={handleMovieClick} />}
      {page === "movieDetail" && selectedMovie && (
        <MovieDetail movie={selectedMovie} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
