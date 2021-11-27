import React from "react";
import { MovieList } from "../components";
import "../styles/movie.css";

export default function Movie({ movieList, isLoading }) {
  return (
    <div>
      <MovieList isLoading={isLoading} movieList={movieList} />
    </div>
  );
}
