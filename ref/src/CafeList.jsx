/* eslint-disable react/prop-types */
import React from 'react';
import Cafe from './Cafe';

function CafeList({cafes}) {
  return (
    <div className="container p-3">
      <div className="row">
        { cafes.map( cafe => <Cafe cafe={cafe} key={cafe.title}/>)}
      </div>
    </div>
  );
}

export default CafeList;