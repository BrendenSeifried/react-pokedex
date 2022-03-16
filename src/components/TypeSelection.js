import React from 'react';

export default function TypeSelection({ type, setType }) {
  return (
    <div>
      <select onChange={(e) => setType(e.target.value)}>
        {type.map((stuff) => (
          <option key={type}>{stuff.type}</option>
        ))}
      </select>
    </div>
  );
  
}
