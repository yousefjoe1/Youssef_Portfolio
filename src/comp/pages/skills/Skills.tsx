import React from 'react'

import './skills.css'

import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section className='skills-section flex justify-center items-center p-3 flex-col overflow-hidden bg-slate-600'>

      {/* <h1>Skills</h1> */}

      <div className="skills-container-animation font-bold">

        <div className="left-skills">
          <div className='lg:text-md text-sm'>
            <DiHtml5 className='lg:text-xl text-lg ' />
            <p>HTML</p>
          </div>

          <div className='lg:text-md text-sm' >
            <DiCss3 className='lg:text-xl text-lg ' />
            <p>CSS</p>
          </div>

          <div className='lg:text-md text-sm' >
            <DiJsBadge className='lg:text-xl text-lg ' />
            <p>JAVASCRIPT</p>
          </div>

        </div>

        <div className="middle-skills">

          <div className='lg:text-md text-sm' >
            <DiSass className='lg:text-xl text-lg ' />
            <p>SASS</p>
          </div>

          <div className='lg:text-md text-sm' >
            <DiBootstrap className='lg:text-xl text-lg ' />
            <p>BOOTSTRAP</p>
          </div>

        </div>

        <div className="right-skills">
          
          <div className='lg:text-md text-sm' >
            <DiGit className='lg:text-xl text-lg ' />
            <p>GIT</p>
          </div>

          <div className='lg:text-md text-sm' >
            <DiReact className='lg:text-xl text-lg '  />
            <p>REACT</p>
          </div>

          <div className='lg:text-md text-sm' >
            <SiTailwindcss className='lg:text-xl text-lg ' />
            <p className='text-center'>TAILWIND CSS</p>
          </div>
        </div>

      </div>
      



    </section>
  )
}

export default Skills