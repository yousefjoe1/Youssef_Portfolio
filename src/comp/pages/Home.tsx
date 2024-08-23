import React from "react";

import myimg from "../../Me.jpg";

import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

import "./home.css";

const Home = () => {
  return (
    <div className="about-section min-h-screen">
      <h1 id="about" className="font-bold mt-2 text-center">
        <span className="text-white text-3xl">About</span>
      </h1>
      {/* <div className="about-img">
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
        </div> */}

      <div className="flex justify-between gap-10 mt-10 p-6 lg:flex-nowrap flex-wrap">
        <p className="font-semibold flex flex-col justify-center bg-white p-7 rounded-2xl lg:w-1/2 text-2xl">
        I'm a passionate front-end developer with 2 years of experience building dynamic and user-centric web applications using React. My expertise lies in crafting intuitive user interfaces, optimizing performance, and collaborating effectively in agile teams. I thrive on challenges.
        Let's connect and build something amazing together!</p>

        <div className="my-img lg:w-1/2 flex justify-center items-center flex-col gap-3 relative p-7">
          <div className="absolute w-full h-full z-0 gl-effect"></div>
          <img
            src={myimg}
            className="rounded-full relative z-10"
            alt="avatar"
            height={100}
            width={100}
          />
          <h1 className="relative z-10 lg:text-2xl">Youssef Mahmoud</h1>
          <h1 className="relative z-10 lg:text-xl">Front End Developer</h1>
          <h1 className="relative z-10 lg:text-xl">yousefmahmoud150@gmail.com</h1>
          <h1 className="relative z-10 lg:text-xl">+201554464169</h1>
          <div className="flex relative z-10 items-center justify-around gap-7 mt-1 social-links">
              <a href='https://www.linkedin.com/in/youssefmahmoud1/' target={'_blank'}> <BsLinkedin style={{fontSize:'30px',color:'#0a66c2'}} /> </a>
              <a href='https://github.com/yousefjoe1' target={'_blank'}><DiGithubBadge className='text-white' style={{fontSize:'40px'}} /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
