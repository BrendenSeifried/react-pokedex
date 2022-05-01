import React from 'react';
import { usePokeContex } from '../context/PokeContext';

export default function Order() {
  const { setOrder } = usePokeContex();
  return (
    <div className='ordercss'>
      <select onChange={(e) => setOrder(e.target.value)}>
        <option value='asc'>Ascending by Attack</option>
        <option value='desc'>Descending by Attack</option>
      </select>
    </div>
  );
}
