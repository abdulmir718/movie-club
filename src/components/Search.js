// import React, {useState, useEffect} from "react";
// import { useHistory } from 'react-router-dom';

// const searchApi = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=`;


// function Header({setMovies}) {

//     let history = useHistory()
//     const [searchValue, setSearchValue] = useState("");
//     const [submitValue, setSubmitValue]= useState("");

//     useEffect(() => {
//       if(submitValue !== ""){
//         fetch(searchApi + submitValue)
//         .then((res) => {
//           console.log(res);
//           return res.json();
//         })
//         .then(data => {setMovies(data.results)
//         console.log(data.results)})
      
//       }}, [submitValue, setMovies])

      
//       function handleForm (event) {
//         event.preventDefault();
//         setSubmitValue(searchValue);
//         console.log('history is: ', history)
//         console.log('submitValue is: ', submitValue)
//       }
    
//       const handleOnChange = (event) => {
//         setSearchValue(event.target.value)
//       }

//   return (
//     <div>
//       <header className="head">
//         <h1 className="title">Movie Club</h1>
//         <form className="search" onSubmit={handleForm}>
//           <input
//             className= "searchBar"
//             type= "text"
//             placeholder= "Search Movies..."
//             onChange={handleOnChange}
//             value={searchValue}
//           />
//         </form>
//       </header>
//     </div>
//   );
// }

// export default Header;

import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'


const searchApi = `https://api.themoviedb.org/3/search/movie?language=en-US&api_key=${process.env.REACT_APP_MOVIE_CLUB_API_KEY}&language=en-US&query=`;


function Header({setMovies}) {

    let history = useHistory()
    const [searchValue, setSearchValue] = useState("");
    const [submitValue, setSubmitValue]= useState("");

    useEffect(() => {
      if(submitValue !== ""){
        history.push(`/search/${submitValue}`)
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
        console.log('history is: ', history)
        console.log('submitValue is: ', submitValue)
      }
    
      const handleOnChange = (event) => {
        setSearchValue(event.target.value)
      }

  return (
    <div>
      <header className="head">
        <Link to = {"/"}>
          <div className = "mainHead">
        <h1 className="title">Movie Club</h1>
        <img className = "logo" src = "/projector.png" alt = "Movie Title"/>
        </div>
        </Link>
        <form className="search" onSubmit={handleForm}>
          <input
            className= "searchBar"
            type= "text"
            placeholder= "Search Movies..."
            onChange={handleOnChange}
            value={searchValue}
          />
        </form>
      </header>
    </div>
  );
}

export default Header;