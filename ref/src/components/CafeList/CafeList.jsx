import React from 'react';
import Cafe from '../Cafe/Cafe';
import "./CafeList.css";

function CafeList({cafes}) {
  return (
    <div className="cafe-list">
      { cafes.map( cafe => <Cafe cafe={cafe} key={cafe.title}/>)}
    </div>
  );
}

export default CafeList;