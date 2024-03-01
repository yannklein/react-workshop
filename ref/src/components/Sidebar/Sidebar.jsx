import React from 'react';
import "./Sidebar.css";

function Sidebar({setCafes}) {
  function addPosts(form) {
    const url = "https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes"
    fetch(url, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(new FormData(form))
    })
      .then(response => response.json())
      .then((data) => {
        setCafes(data)
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addPosts(event.currentTarget)
  }

  const criteria = ["Stable Wi-Fi", "Power sockets", "Quiet", "Coffee", "Food"]

  return (
    <div className="sidebar">
      <div>
        <h3>Share your work spot</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cafe-name" className="form-label">What's its name?</label>
            <input placeholder="FabCafe Shibuya" type="text" className="form-control" id="cafe-name" aria-describedby="emailHelp" />
          <div className="mb-3"> 
          </div>
            <label htmlFor="cafe-address" className="form-label">Where is it?</label>
            <input placeholder="1-chome-11-1 Shibuya, Shibuya City, 150-0002, Tokyo, 150-0002, Tokyo" type="address" className="form-control" id="cafe-address" />
          </div>
          <div className="mb-3"> 
            { criteria.map((criterion) => {
              return ( 
                <React.Fragment key={criterion}>
                  <input type="checkbox" className="btn-check" id={criterion} autoComplete="off" />
                  <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor="feature-wifi">{criterion}</label>
                </React.Fragment>
              )
            }) }
          </div>
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