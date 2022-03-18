import React from 'react';

export default function Order({ setOrder }) {
  return (
    <div>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value='asc'>Ascending by Attack</option>
        <option value='desc'>Descending by Attack</option>
      </select>
    </div>
  );
}
