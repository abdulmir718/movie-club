import React, {useState, useEffect} from "react";


const searchApi = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=`;


function Header({setMovies}) {

    const [searchValue, setSearchValue] = useState("");
    const [submitValue, setSubmitValue]= useState("");

    useEffect(() => {
      if(submitValue !== ""){
        fetch(searchApi + submitValue)
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then(data => {setMovies(data.results)
        console.log(data.results)})
      
      }}, [submitValue, setMovies])

      
      function handleForm (event) {
        event.preventDefault();
        setSubmitValue(searchValue);
      }
    
      const handleOnChange = (event) => {
        setSearchValue(event.target.value)
      }

  return (
    <div>
      <header className="head">
        <h1 className="title">Movie Club</h1>
        <form className="search" onSubmit={handleForm}>
          <input
            className= "searchBar"
            type= "text"
            placeholder= "Search Movies..."
            onChange={handleOnChange}
            value={searchValue}
          />
          <button>Search</button>
        </form>
      </header>
      <h2>Search Results For: "{submitValue}"</h2>
    </div>
  );
}

export default Header;
