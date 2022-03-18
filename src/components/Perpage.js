import React from 'react';

export default function Perpage({ perPage, setPerPage }) {
  return (
    <div>

      <input type='number' value={perPage} onChange={(e) => setPerPage(e.target.value)}>

        
        {/* <button onClick={callback2}>Number of Pokemon per page.</button> */}
      </input>

    </div>
  );
}
