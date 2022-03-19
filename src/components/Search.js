import React from 'react';
import './Component.css';
export default function Search({ cue, setCue, callback }) {
  return (
    <div className='searchcss'>
      <input value={cue} onChange={(e) => setCue(e.target.value)}/>
      <button onClick={callback}>Search</button>
    </div>
  );
}
