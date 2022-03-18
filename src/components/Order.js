import React from 'react';

export default function Order({ setOrder }) {
  return (
    <div>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
      </select>
    </div>
  );
}
