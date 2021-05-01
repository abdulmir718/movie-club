import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css"

const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;



function App() {
  const [movies, setMovies] = useState([]);
  console.log("movies", movies)

  useEffect(() => {
    fetch(featuredApi)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
    .catch(console.error);
  }, []);

  

  return (
    <div className="App">

      <div className = "header">
      <Header setMovies = {setMovies}/>
      </div>

      
      <div className = "movieList">
      <h2>Featured Movies</h2>
        {movies &&
        movies.map((movie) => <MovieList  key = {movie.id} {...movie} /> )}
      </div>

      </div>
    
  );
}

export default App;
