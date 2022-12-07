import React from 'react';

function Collection({ collections }) {
  return (
    <>
      <div>
        <h2>{collections.name}</h2>
        <button>Expand</button>
      </div>
    </>
  )
}

export default Collection;