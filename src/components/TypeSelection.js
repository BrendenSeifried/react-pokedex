import React from 'react';

export default function TypeSelection({ types, setTypes }) {
  return (
    <div>
      <select onChange={(e) => setTypes(e.target.value)}>
        {types.map((stuff) => (
          <option key={stuff.type}>{stuff.type}</option>
        ))}
      </select>
    </div>
  );
  
}
