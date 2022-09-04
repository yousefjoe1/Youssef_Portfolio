import React from 'react'

import './projects.css'

import freelance1 from './Imgs/first-work-freelance.png'

import questionspro from './Imgs/questions.png'

const Projects = () => {
  return (
    <section className='projects-section'>
      <h1 className='text-center font-bold'>Projects</h1>
      <h2>FreeLance Projects</h2>
      <div className="freelance-projects-container flex justify-center">
        <div className='freeelance-single-project text-center'>
          <img src={freelance1} alt="" />
          <div className="info-hiding">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>
      </div>

      <h1>Personal Projects</h1>

      <div className="personal-projects-container flex flex-wrap justify-center mx-auto gap-9" style={{width:'90%'}}>

        <div className="single-personal-projects">
          <img src={questionspro} alt="" />
          <div className="info-hiding text-center">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>

        <div className="single-personal-projects">
          <img src={questionspro} alt="" />
          <div className="info-hiding text-center">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>

        <div className="single-personal-projects">
          <img src={questionspro} alt="" />
          <div className="info-hiding text-center">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>

        <div className="single-personal-projects">
          <img src={questionspro} alt="" />
          <div className="info-hiding text-center">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>

        <div className="single-personal-projects">
          <img src={questionspro} alt="" />
          <div className="info-hiding text-center">
            <h1>Dgym Project</h1>
            <h2>HTML + CSS + BOOTSTRAP + JAVASCRIPT</h2>
            <h3 className='text-center mt-4'>More Info</h3>
          </div>
        </div>

      </div>
      
    </section>
  )
}

export default Projects