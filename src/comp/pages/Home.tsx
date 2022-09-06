import React from 'react'

import aboutimg from './homebg.jpg'


import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

import './home.css'

const Home = () => {
  return (
    <div className='about-section'>
      <h1 id='about' className='text-center font-bold' style={{fontSize:'25px'}}>
        <span className=''>About</span>

      </h1>
        <div className="about-img">
          <img className='' src={aboutimg} alt="" />
          <div className="quick-preview">
            <h1 className='myname text-center font-bold' style={{fontSize:'20px'}}>Youssef Mahmoud</h1>
            <h3 className=' font-bold'>I am a Front End Develper.</h3>
            <h3 className='text-center font-bold'>I love programming and coding.</h3>
            <h3 className='text-end font-bold'>I am learning and coding every day.</h3>

            <div className="social-links flex mt-1 items-center justify-around">
              <a href='https://www.linkedin.com/in/youssefmahmoud1/' target={'_blank'}> <BsLinkedin style={{fontSize:'30px',color:'#0a66c2'}} /> </a>
              <a href='https://github.com/yousefjoe1' target={'_blank'}><DiGithubBadge className='text-white' style={{fontSize:'40px'}} /></a>
            </div>

            <h2 className='text-center font-bold text-white' style={{fontSize:'20px'}}>I am a hard working developer and I am addictid to learn and code every day.</h2>
          </div>
        </div>
      
    </div>
  )
}

export default Home