import React, {useState, useEffect, useContext} from "react";
import { MovieContext } from "../MovieContext";


const img = "https://image.tmdb.org/t/p/w500"

function Movie({match}) {

    const {context} = useContext(MovieContext);
    const {setMovies} = context;
    const [movieDetails, setMovieDetails] = useState({});

    let url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;
    
    const [genre, setGenre] = useState();


    useEffect(() => {
        fetch(url)
        .then((res) => {
          return res.json();
        })
        .then(data => {
            setMovieDetails(data)
            setGenre(data.genres)
            });
          }, [match.params.id, setMovies]);
          
    const renderGenres = genre?.map(genre => {
        return (`${genre.name},`)
    });

    return (
        <div className = "mainMovieContainer">
            <h1 className = "movieDeetsHeader">Movie Details</h1>
            <div className = "movieCon">
            <div className = "movieImageContainer">
            <img src={img + movieDetails.poster_path} alt = {movieDetails.title} />
            </div>
            <div className = "movieDetails">
            <h2>Title: {movieDetails.title || movieDetails.name}</h2>
            <h2>Release Date: {movieDetails.release_date}</h2>
            {renderGenres ? <h2>Genre: {renderGenres}</h2>: null}
            <h2>Overview: {movieDetails.overview}</h2>
            <h2>Rating: {movieDetails.vote_average}/10</h2>
            <h2>Runtime: {movieDetails.runtime} Minutes</h2>
            <h2><a className = "movieLink" href={movieDetails.homepage}> Watch Trailer/Movie Here</a></h2>
            </div>
            </div>
        </div>
    );
}

export default Movie;