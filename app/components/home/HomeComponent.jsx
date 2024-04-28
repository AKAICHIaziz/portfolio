import React from 'react'

import "./home.css"
import SocialMedia from './SocialMedia'

const HomeComponent = () => {
  return (
    <div id='home' className='home_section'>
      <div className="profile">

        <div className="profile_info">
          <div className="text">
            <div className="hi">Hi,</div>
            <div className="name">I'm Akaichi Med Aziz</div>
            <div className="description">A <span>Fullstack JS Developper</span></div> 
          </div>
          <SocialMedia />
          <div className="buttons">
            <button className="btn bnt1"> Get in touch</button>
            <button className="btn btn2">Hire me</button>
          </div>
        </div>

        <div className="profile_image">
          <img src="/me.jpg" alt="" />
        </div>

      </div>
    </div>
  )
}

export default HomeComponent