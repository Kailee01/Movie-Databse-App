import React from "react";
import { Link } from "react-router-dom";
import "../styles/movie.css";
export default function Home() {
  return (
    <Link to="/movie-list">
      <button className="buttnMovie"> Click To See all Movies</button>
    </Link>
  );
}
