import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="Card"> 
        <img src="https://r1imghtlak.mmtcdn.com/082f1ae6330211eb9c050242ac110004.jpg?&output-quality=75&downsize=328:180&crop=328:180;0,19&output-format=jpg" alt="" />
        <div className="Info">Reddison Blu Hotel</div>
        <div className="ExtraInfo">Surat, Gujarat</div>
        <div className="Extra">Upscale Hotel with a spa and sports court</div>
        <button type='Button'>See Details</button>
    </div>
  )
}

export default Card