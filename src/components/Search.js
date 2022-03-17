import React from 'react';

export default function Search({ cue, setCue, callback }) {
  return (
    <div>
      <input value={cue} onChange={(e) => setCue(e.target.value)}/>
      <button onClick={callback}>Search</button>
    </div>
  );
}
