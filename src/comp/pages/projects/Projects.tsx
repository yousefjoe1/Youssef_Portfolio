import React from 'react'

import './projects.css'

import { AiOutlineGlobal } from 'react-icons/ai';

import freelance1 from './Imgs/first-work-freelance.png'

import questionspro from './Imgs/questions.png'
import crypto_project from './Imgs/crypto_project.png'
import store from './Imgs/store.png'
import Travel_advisor_project from './Imgs/Travel_advisor_project.png'
import wordgame from './Imgs/wordgame.png'
import veg_cart from './Imgs/veg-cart.png'
import weatherapp from './Imgs/weatherapp.png'
import linkedin from './Imgs/linkedin.png'
import temp1 from './Imgs/temp1.png'
import advice_generator from './Imgs/advice-generator.png'
import todo from './Imgs/todo.png'
import discord from './Imgs/discord.png'
import calc from './Imgs/calc.png'
import mem_game from './Imgs/mem-game.png'
import shoppingcart from './Imgs/shoppingcart.png'
import productlandingpage from './Imgs/product-landingpage.png'
import amazoneclone from './Imgs/amazontemp.png'
import outlet from './Imgs/outlet.png'

const Projects = () => {


  return (
    <section className='projects-section relative' >

      <h1 className='text-center my-4 text-slate-50 font-bold' style={{fontSize:'23px',borderBottom:'1px solid white'}}>Projects</h1>

      <h1 className='text-center my-4 text-black bg-slate-300 font-bold' style={{fontSize:'23px',borderBottom:'1px solid white'}}>Projects in the company</h1>
      <div className="projects_in_company">

      <div className="single-personal-projects">

        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={outlet} alt="" />
        </div>
          
          <div className="info-hiding text-center">
            <h1>Mansoura Outlet</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + 
                TAILWIND_CSS</h2>
                <br />
                <a
                  target="_blank"
                  href="https://abc-mansoura.com/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px',}} /></span>
                </a>
          </div>
      </div>
      </div>

      <h2 className='text-center font-bold mb-3 mt-3 bg-slate-300 text-black' style={{fontSize:'20px'}}>FreeLance Projects</h2>
      <div className="freelance-projects-container relative flex justify-center">


        <div className='freeelance-single-project text-center'>
          <img src={freelance1} alt="" />
          <div className="info-hiding">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <div className='flex justify-between dgymlinks flex-wrap mt-4'>
            <a
                  target="_blank"
                  href="https://digitalgym.in/v1/app/pages/dashboards/default.html"
                >
                  Link1
                </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/authentication/signin/cover.html"
                    target="_blank"
                  >
                    Link2
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/authentication/signup/cover.html"
                    target="_blank"
                  >
                    Link3
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/ecommerce/referral.html"
                    target="_blank"
                  >
                    Link4
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/applications/wizard.html"
                    target="_blank"
                  >
                    Link5
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/applications/analytics.html"
                    target="_blank"
                  >
                    Link6
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/ecommerce/overview.html"
                    target="_blank"
                  >
                    Link7
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/ecommerce/attendee.html"
                    target="_blank"
                  >
                    Link8
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/ecommerce/employeelist.html"
                    target="_blank"
                  >
                    Link9
                  </a>
                  <a
                    href="https://digitalgym.in/v1/app/pages/ecommerce/memberlist.html"
                    target="_blank"
                  >
                    Link10
                  </a>

            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center my-5 text-slate-50 font-bold' style={{fontSize:'23px',borderBottom:'1px solid white'}}>Personal Projects</h1>

      <div className="personal-projects-container flex flex-wrap justify-center mx-auto gap-9" style={{width:'90%'}}>

        <div className="single-personal-projects">
          <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
            <img  style={{width:'100%',height:'100%'}} src={questionspro} alt="" />
          </div>
          <div className="info-hiding text-center">
            <h1>Questions Game</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT + MATERIAL-UI + FIREBASE + REDUX</h2>
            <br />
            <a target="_blank" href="https://questions-game-cd095.web.app/">
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container" style={{width:'100%',height:'60%'}} >
          <img style={{width:'100%',height:'100%'}}  src={crypto_project} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Crypto App</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT + Anti Design</h2>
            <br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/crypto-project/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={amazoneclone} alt="" />
        </div>

          <div className="info-hiding text-center">
            <h1>Amazon Clone</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS</h2>
            <br />
            <a
                  href="https://yousefjoe1.github.io/amazone1/"
                  target="_blank"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">

        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={mem_game} alt="" />
        </div>
          
          <div className="info-hiding text-center">
            <h1>Memeory Game</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REACT-TYPESCRIPT +
                TAILWIND_CSS</h2>
                <br />
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/Memory-Game/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={productlandingpage} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Product Landing page</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REACT-TYPESCRIPT +
                TAILWIND_CSS</h2>
                <br />
                <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/Simple-Product-Landing-Page/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={calc} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Calculaotr</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS</h2><br />
            <a
                  href="https://yousefjoe1.github.io/Simple-Calculator/"
                  target="_blank"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>


        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={linkedin} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>LinkedIn Clone</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/linkedIn-clone-2022/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={discord} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Discord Clone</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REACT_BOOTSTRAP + BOOTSTRAP</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/discord-clone/#/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={shoppingcart} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Food Shopping Cart</h1>
            <h2>HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/my-shopping-cart/#/shopping-cart"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={store} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Store</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/Simple-E-commerce/index.html"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={Travel_advisor_project} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Travel Advisor</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT + GOOGLE MAPS + MATERIAL-UI</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/simple-react-travel-advisor-app/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={wordgame} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Words Game</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS</h2><br />
            <a
                  href="https://yousefjoe1.github.io/Words-Game/"
                  target="_blank"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={veg_cart} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Vegetables Shopping Cart</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + REDUX/TOOLKIT</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/vegetables-shopping-cart/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={weatherapp} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Weather App</h1>
            <h2>HTML + CSS + JAVASCRIPT</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/simple-weather-app-js/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={temp1} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Landing page</h1>
            <h2>HTML + CSS + JAVASCRIPT + BOOTSTRAP + REACT.JS</h2><br />
            <a href="https://yousefjoe1.github.io/temp-2n/#/"
                  target="_blank"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>{" "}
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={advice_generator} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Advice Generator</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS</h2><br />
            <a
                  target="_blank"
                  href="https://yousefjoe1.github.io/advice-generator-app/"
                >
                  Link<span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

        <div className="single-personal-projects">
        <div className="project-img-container"  style={{width:'100%',height:'60%'}}>
          <img  style={{width:'100%',height:'100%'}} src={todo} alt="" />
        </div>
          <div className="info-hiding text-center">
            <h1>Todo List</h1>
            <h2>HTML + CSS + JAVASCRIPT + REACT.JS + TYPESCRIPT + TAILWIND CSS</h2><br />
            <a
                  href="https://yousefjoe1.github.io/Simple-Todo-app/"
                  target="_blank"
                >
                  Link 
                <span className='flex justify-center'><AiOutlineGlobal style={{fontSize:'20px'}} /></span>
                </a>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Projects