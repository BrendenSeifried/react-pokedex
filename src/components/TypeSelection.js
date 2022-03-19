import React from 'react';

export default function TypeSelection({ types, setSelectedType }) {
  return (
    <div className='typeselectioncss'>
      <select onChange={(e) => setSelectedType(e.target.value)}>
        {types.map((stuff) => (
          <option key={stuff}>{stuff}</option>
        ))}  
      </select>
    </div>
  );
  
}
