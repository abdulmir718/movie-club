import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import "./App.css"

const featuredApi = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("THIS IS URL",featuredApi);
    fetch(featuredApi)
    .then((res) => res.json())
    .then((data) => {
      console.log("THIS IS DATA",data)
      setMovies(data.results);
    })
    .catch(console.error);
  }, []);

  

  return (
    <div className="App">

      <div className = "header">
        <Header setMovies = {setMovies}/>
      </div>

      
      <h2>Featured Movies</h2>
      
      <div className = "movieList">
        <Route exact path="/" component={MovieList} />
        {movies &&
        movies.map((movie) => <MovieList  key = {movie.id} movie={movie} id = {movie.id} /> )}
      </div>

      <div className = "Movie">
        <Route exact path = "/movie/:id" 
        render = {(routerProps) => <Movie setMovies = {setMovies} movies = {movies} match = {routerProps.match}/>} />
       </div>
      

      </div>
    
  );
}

export default App;
