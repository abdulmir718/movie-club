import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import "./App.css"

const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;


const searchApi = `https://api.themoviedb.org/3/search/collection?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(featuredApi)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
    .catch(console.error);
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    fetch(searchApi + searchValue)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
    .catch(console.error);
  };

  const handleOnChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">

      <Header />


      
      <div className = "movieList">
      <h2>Featured Movies</h2>
        {movies.length > 0 &&
        movies.map((movie) => <MovieList key = {movie.id} {...movie} /> )}
      </div>

      </div>
    
  );
}

export default App;
