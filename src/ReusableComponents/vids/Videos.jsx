import React from 'react'
import './videos.scss'
const Videos = () => {
  const vidLength = [0,1,2]  
  return (
    <div className="videos">
      {vidLength.map(vid => (
        <img key={vid} src='https://picsum.photos/300/200' alt='...'></img>
      ))}
    </div>
  )
}

export default Videos