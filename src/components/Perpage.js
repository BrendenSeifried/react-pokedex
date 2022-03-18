import React from 'react';

export default function Perpage({ perPage, setPerPage, setPageClick }) {
  return (
    <div>
      <label>Set results per page
        <input type='number' value={perPage} onChange={(e) => setPerPage(e.target.value)}/>
       
        <button onClick={() => setPageClick(perPage)}>Set</button>
      </label>
    </div>
  );
}
