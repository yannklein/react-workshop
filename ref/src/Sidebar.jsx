import React from 'react';
import Searchbar from './Searchbar';

function Sidebar({filterCafe}) {
  return (
    <div className="p-3 bg-success-subtle vh-100 sticky-top">
      <Searchbar filterCafe={filterCafe} />
      <h3 className="mt-5 mb-3" >Share your work spot reco:</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="cafe-name" className="form-label">What's its name?</label>
          <input placeholder="FabCafe Shibuya" type="text" className="form-control" id="cafe-name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="cafe-address" className="form-label">Where is it?</label>
          <input placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" type="address" className="form-control" id="cafe-address" />
        </div>
        <p className='mb-2'>Feature</p>
        <input type="checkbox" className="btn-check" id="feature-wifi" autoComplete="off" />
        <label className="btn btn-outline-success btn-sm mx-1" htmlFor="feature-wifi">Wifi</label>
        <input type="checkbox" className="btn-check" id="feature-power" autoComplete="off" />
        <label className="btn btn-outline-success btn-sm mx-1" htmlFor="feature-power">Power sockets</label>
        <div className="input-group my-3">
          <input type="file" className="form-control" id="cafe-picture" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-success">Ready to brew</button>
        </div>
      </form>
    </div>
  );
}

export default Sidebar;