import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css"

const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.MOVIE_CLUB_API_KEY}`;


const searchApi = `https://api.themoviedb.org/3/search/collection?api_key=${process.env.MOVIE_CLUB_API_KEY}&language=en-US&query=`;

function App() {
  const [movies, setMovies] = useState([]);

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
      
      <Header />

      <div className = "featuredMovies">
        {movies.length > 0 &&
        movies.map((movie) => <MovieList key = {movie.id} {...movie} /> )}
      </div>

      </div>
    
  );
}

export default App;
