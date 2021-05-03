import React from "react";
import {Link} from "react-router-dom";


const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieList({movie}) {
    let {title, poster_path, name, id} = movie;
    return (
        
        <div className = "movies">
            <Link to = {`/movie/${id}`} key = {id}>
                <img src = {imageUrl + poster_path} alt = {title} />
                <div className = "movieTitle">
                <h2>{title || name}</h2>
                </div>
            </Link>

        </div>
    );
}

export default MovieList;