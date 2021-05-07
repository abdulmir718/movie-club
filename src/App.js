import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import "./App.css";
import { MovieContext } from "./MovieContext";

function App() {
  const [movies, setMovies] = useState([]);
  const context = { movies, setMovies };
  return (
    <MovieContext.Provider value={{context}}>
      <div className="App">
        <div className="header">
          <Search setMovies={setMovies} />
        </div>


        <div className="movieList">
          <Route
            exact
            path="/"
            component={MovieList}
          />
        </div>

        <div className="Movie">
          <Route
            exact
            path="/movie/:id"
            render={(routerProps) => (
              <Movie
                match={routerProps.match}
              />
            )}
          />
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
