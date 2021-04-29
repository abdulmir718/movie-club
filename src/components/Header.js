import React from 'react';

function Header(props) {
    return (
        <div>

            <header className = "head">
            <h1 className = "title">Movie Club </h1>
            <div className = "search">
            <input className = "searchBar" type = "text" placeholder = "Search Movies..." /> 
            <button>Search</button>
            </div>
            </header>
            
        </div>
    );
}

export default Header;