import React from 'react';

function Searchbar({filterCafe}) {

  function handleChange(event) {
    filterCafe(event.currentTarget.value)
  }
  return (
    <>
      <h3>Find you spots:</h3>
      <input placeholder="Starbucks" type="text" className="form-control" onChange={handleChange} />
    </>
  );
}

export default Searchbar;