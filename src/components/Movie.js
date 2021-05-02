import React, {useState, useEffect} from 'react';


function Movie({match, movies}) {
    const [movieDetails, setMovieDetails] = useState({})
    let url = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=${match.params.id}`

    useEffect(() => {
        fetch(url)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then(data => {setMovieDetails(data.results)
            console.log(data.results)})
          }, [match.params.id, movies])
          
    return (
        <div>
            <h1>Movie Details</h1>
        </div>
    );
}

export default Movie;