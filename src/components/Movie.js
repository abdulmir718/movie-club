import React, {useState, useEffect, useContext} from 'react';
import { MovieContext } from '../MovieContext'


const img = "https://image.tmdb.org/t/p/w500"

function Movie({match}) {

    const {context} = useContext(MovieContext)
    const {setMovies} = context;

    console.log("THIS IS ID", match.params.id );
    console.log("THIS IS MY API KEY", process.env.REACT_APP_MOVIE_CLUB_API_KEY === "2da35cbf21ea9330a33d3982943bf930")
    const [movieDetails, setMovieDetails] = useState({})

    let url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;
    
    const [genre, setGenre] = useState()


    useEffect(() => {
        fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then(data => {
            setMovieDetails(data)
            setGenre(data.genres)
            console.log(data)})
          }, [match.params.id, setMovies])
          
    const renderGenres = genre?.map(genre => {
        return (`${genre.name}, `)
            // <div className="genreItem">{genre.name}</div>)
    })
    console.log("movie details", renderGenres)

    return (
        <div>
            <h1>{movieDetails.title || movieDetails.name}</h1>
            <img src={img + movieDetails.poster_path} alt = {movieDetails.title} />
            <h2>Release Date: {movieDetails.release_date}</h2>
            {renderGenres ? <h2>Genre: {renderGenres}</h2>: null}
            <h2>Overview: {movieDetails.overview}</h2>
            <h2>Rating: {movieDetails.vote_average}/10</h2>
            <h2>Runtime: {movieDetails.runtime} Minutes</h2>
            <h2><a className = "movieLink" href={movieDetails.homepage}> Watch Trailer/Movie Here</a></h2>
        </div>
    );
}

export default Movie;