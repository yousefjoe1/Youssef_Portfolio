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
    <section className='skills-section flex justify-center items-center p-3 '>

      <div className="skills-container-animation font-bold">

        <div className="left-skills">
          <div className=''>
            <DiHtml5 className='' style={{fontSize:'25px'}} />
            <p>HTML</p>
          </div>

          <div className='' >
            <DiCss3 className='' />
            <p>CSS</p>
          </div>

          <div className='' >
            <DiJsBadge className='' style={{fontSize:'25px'}} />
            <p>JAVASCRIPT</p>
          </div>

        </div>

        <div className="middle-skills">

          <div className='' >
            <DiSass className='' style={{fontSize:'25px'}} />
            <p>SASS</p>
          </div>

          <div className='' >
            <DiBootstrap className='' style={{fontSize:'25px'}} />
            <p>BOOTSTRAP</p>
          </div>

        </div>

        <div className="right-skills">
          
          <div className='' >
            <DiGit className='' style={{fontSize:'25px'}} />
            <p>GIT</p>
          </div>

          <div className='' >
            <DiReact className='' style={{fontSize:'25px'}}  />
            <p>REACT</p>
          </div>

          <div className='' >
            <SiTailwindcss className='' style={{fontSize:'25px'}} />
            <p className='text-center'>TAILWIND CSS</p>
          </div>
        </div>

      </div>
      



    </section>
  )
}

export default Skills