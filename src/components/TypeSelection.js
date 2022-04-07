import React from 'react';
import { usePokeContex } from '../context/PokeContext';

export default function TypeSelection() {
  const { types, setSelectedType } = usePokeContex();
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
