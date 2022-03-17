import React from 'react';

export default function TypeSelection({ types, setSelectedType }) {
  return (
    <div>
      <select onChange={(e) => setSelectedType(e.target.value)}>
        {types.map((stuff) => (
          <option key={stuff.type}>{stuff.type}</option>
        ))}
      </select>
    </div>
  );
  
}
