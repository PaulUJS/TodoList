import React from 'react'

function DelCollection({ collection }) {
  async function deleteCollection() {
    const response = await fetch(`http://localhost:4000/api/collections//${collection}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();
  }
  return (
        <form className='del-col' onSubmit={deleteCollection}>
          <button type='submit'>Delete</button>
        </form>
  )
}

export default DelCollection