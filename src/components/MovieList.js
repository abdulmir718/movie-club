import React, { useEffect, useContext} from "react";
import MovieItem from "./MovieItem";
import { MovieContext } from '../MovieContext';

function MovieList() {

    const {context} = useContext(MovieContext);
    const {movies, setMovies} = context;

    const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;
    
    useEffect(() => {
        fetch(featuredApi)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        })
        .catch(console.error);
      }, [setMovies, featuredApi]);
    return (
      <div>
        <div className = "movieListContainer">
              {movies.length > 1 &&
              movies.map((movie) => <MovieItem  key = {movie.id} movie={movie} id = {movie.id} /> )}
        </div>
      </div>
    )

    

}

export default MovieList;