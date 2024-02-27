import React from 'react';
import Cafe from './Cafe';

function CafeList({cafes}) {
  return (
    <div className="container">
      <div className="row g-4 p-4">
        { cafes.map( cafe => <Cafe cafe={cafe} key={cafe.title}/>)}
      </div>
    </div>
  );
}

export default CafeList;