/* eslint-disable react/prop-types */
import React from 'react';

function Cafe({cafe}) {
  return (
    <div className="col-12 col-md-6 col-xl-4 mb-4">
      <div className="card h-100">
        <img height='260' src={cafe.picture} className="card-img-top object-fit-cover" alt={cafe.title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{cafe.title}</h5>
          <p className="card-text">
            { cafe.criterion.slice(0, 4).map( crit => <span className="badge text-bg-secondary me-1" key={crit}>{crit}</span>)}
          </p>
          <a href={cafe.gmaps_url} className="btn btn-success">Show the map 📍</a>
        </div>
      </div>
    </div>
  );
}

export default Cafe;