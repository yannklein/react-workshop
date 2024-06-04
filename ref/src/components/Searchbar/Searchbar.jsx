import React from 'react';
import './Searchbar.css';

// OPTIONAL: USE EFFECT VERSION
// function Searchbar({setKeyword}) {
function Searchbar({setCafes}) {

  function handleChange(event) {
    // OPTIONAL: USE EFFECT VERSION
    // setKeyword(event.currentTarget.value);

    const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=${event.currentTarget.value}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCafes(data);
      });
  }
  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input placeholder="Starbucks" type="text" className="form-control" onChange={handleChange} />
    </div>
  );
}

export default Searchbar;