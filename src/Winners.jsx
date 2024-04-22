// Winners.jsx
import React from 'react';

function Winner({ winner }) {
  return (
    <div>
      <h2>Winner</h2>
      {winner && <p>{winner}</p>}
    </div>
  );
}

export default Winner;
