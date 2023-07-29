import React from 'react'
import './Home.css'
import svg from '../assets/girl.svg'

const Home = () => {
  return (
    <div className="home">
      <div className='left'>The most beautiful in the world is,<br/> of course, the world itself.<br/>
        <div className="another">Build, organize, and map your itineraries in a free<br/> travel app designed for vacations & road trips</div>
        <button type ="button">Search Destination</button>
      </div>
      <div className='right'> 

        <img src={svg}/>
      </div>
    </div>
  )
}

export default Home