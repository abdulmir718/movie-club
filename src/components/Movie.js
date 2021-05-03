import React, {useState, useEffect} from 'react';


function Movie({match, movies, setMovies}) {
    console.log("THIS IS ID", match.params.id );
    console.log("THIS IS MY API KEY", process.env.REACT_APP_MOVIE_CLUB_API_KEY === "2da35cbf21ea9330a33d3982943bf930")
    const [movieDetails, setMovieDetails] = useState({})

    const movieID = match.params.id;
    // let url = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=${match.params.id}`
    let url = `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;
    // let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}`;

    useEffect(() => {
        fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then(data => {
            setMovieDetails(data)
            console.log(data)})
          }, [match.params.id, movies, setMovies])
          
    return (
        <div>
            <h1>{movieDetails.original_title}</h1>
            <img src={movieDetails.original_title} alt="{movieDetails.original_title}" />
        </div>
    );
}

export default Movie;