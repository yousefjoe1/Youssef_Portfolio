import React from 'react'


import myimg from '../../Me.jpg'


import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

import './home.css'

const Home = () => {
  return (
    <div className='about-section'>
      <h1 id='about' className='font-bold text-center' style={{fontSize:'25px'}}>
        <span className=''>About</span>

      </h1>
        <div className="about-img">
          <div className='flex items-end justify-center rounded-xl bg-slate-300'>
          <img src={myimg} className='mx-auto scale-50 '  alt="my image" />
          </div>
          <div className="quick-preview">
            <h1 className='font-bold text-center myname' style={{fontSize:'25px'}}>Youssef Mahmoud</h1>
            <h3 className='font-bold '>I am a Front End Develper.</h3>
            <h3 className='font-bold text-center'>I love programming and coding.</h3>
            <h3 className='font-bold text-end'>I am learning and coding every day.</h3>

            <div className="flex items-center justify-around mt-1 social-links">
              <a href='https://www.linkedin.com/in/youssefmahmoud1/' target={'_blank'}> <BsLinkedin style={{fontSize:'30px',color:'#0a66c2'}} /> </a>
              <a href='https://github.com/yousefjoe1' target={'_blank'}><DiGithubBadge className='text-white' style={{fontSize:'40px'}} /></a>
            </div>

            <h2 className='font-bold text-center text-white' style={{fontSize:'20px'}}>I am a hard working developer and I am addictid to learn and code every day.</h2>
          </div>
        </div>
      
    </div>
  )
}

export default Home