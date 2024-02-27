import React from 'react';

function CriteriaInput({criteria}) {
  return (
    <>
      <input type="checkbox" className="btn-check" id={criteria} autoComplete="off" />
      <label className="btn btn-outline-success btn-sm mx-1 mb-1" htmlFor="feature-wifi">{criteria}</label>
    </>
  )
}

export default CriteriaInput;