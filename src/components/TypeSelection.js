import React from 'react';

export default function TypeSelection({ types, setType }) {
  return (
    <div>
      <select onChange={(e) => setType(e.target.value)}>
        {types.map((stuff) => (
          <option key={stuff.type}>{stuff.type}</option>
        ))}
      </select>
    </div>
  );
  
}
