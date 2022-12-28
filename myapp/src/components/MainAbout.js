import React from 'react'

function MainAbout() {
  return (
    <>
      <div className='feature-container'>
        <h1>Key Features</h1>
        <div className='icon-1'><img src={process.env.PUBLIC_URL + '/notepadpng.png'} /></div>
        <div className='icon-2'><img src={process.env.PUBLIC_URL + '/search.png'} /></div>
        <div className='icon-3'><img src={process.env.PUBLIC_URL + '/dumbell.png'} /></div>
        <div className='p-1'><p>Create workout plans and share them with others</p></div>
        <div className='p-2'><p>Search, like and save workout plans made by others</p></div>
        <div className='p-3'><p>Use these workouts and enjoy your time exercising</p></div>
      </div>
    </>
  )
}

export default MainAbout