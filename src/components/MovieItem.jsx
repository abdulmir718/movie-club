import {Link} from "react-router-dom";
import "../App.css";

function MovieItem({movie}) {
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    let {title, poster_path, name, id} = movie;
    return (
        
        <div className = "movieItem">
            <Link to = {`/movie/${id}`} key = {id}>
                <div className = "movieItemPoster">
                <img src = {imageUrl + poster_path} alt = {title} />
                </div>
                <div className = "movieItemTitle">
                <h2>{title || name}</h2>
                </div>
            </Link>
        </div>
        
    );
}

export default MovieItem;