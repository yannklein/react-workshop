import React from 'react';

function Sidebar() {
  return (
    <div style={{backgroundColor: "#E2EAED"}} className=" d-flex flex-column justify-content-between vh-100 sticky-top">
      <div className="p-4 mx-2">
        <h3 className="mt-4 mb-3" >Share your work spot</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="cafe-name" className="form-label">What's its name?</label>
            <input placeholder="FabCafe Shibuya" type="text" className="form-control" id="cafe-name" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="cafe-address" className="form-label">Where is it?</label>
            <input placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" type="address" className="form-control" id="cafe-address" />
          </div>
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
      <img src="logo_w_context2.png" alt="" />
    </div>
  );
}

export default Sidebar;