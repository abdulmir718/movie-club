import React from "react";


const imageUrl = "https://image.tmdb.org/t/p/w500";

function MovieList({title, poster_path}) {
    
    return (
        
        <div className = "movieList">
            
                <img src = {imageUrl + poster_path} alt = {title} />
                <h2>{title}</h2>

        </div>
    );
}

export default MovieList;