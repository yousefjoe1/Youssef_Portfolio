import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AiFillCaretDown } from 'react-icons/ai';

import st from './nav.module.css'

const Navbar = () => {
const [rotateval,setRotatval] = useState<string>('about-rotate')

const [showboxLinks,setShowboxLinks] = useState<string>('')

const [boxPosition,setBoxPosition] = useState<string>()

const [navWrapperActive,setNavWrapperActive] = useState<string>('')

const navigate = useNavigate()

const rotationFunc = (linkname:string,e:{preventDefault:Function}) => {
e.preventDefault()

switch(linkname) {
  case 'skills':
    setRotatval('skills-rotate');
    setTimeout(() => {
      navigate('/skills')
      window.scrollTo(
        {
          top: 700,
          left: 0,
          behavior: 'smooth'
        })
    }, 1000);

    break;
    
    case 'about':
    setRotatval('about-rotate');
    setTimeout(() => {
      navigate('/about')
      window.scrollTo(
        {
          top: 700,
          left: 0,
          behavior: 'smooth'
        })
    }, 1000);
    break;
    
    case 'certificates':
      if( rotateval === 'about-rotate') {
        setRotatval('certificate-rotate-from-about')
      }else if(rotateval === 'projects-rotate-basic') {
        setRotatval('certificate-rotate-from-projects')
      }
      else if(rotateval === 'skills-rotate') {
        setRotatval('certificate-rotate-from-skills')
      }
      setTimeout(() => {
        navigate('/certificates')
        window.scrollTo(
          {
            top: 700,
            left: 0,
            behavior: 'smooth'
          })
    }, 1000);

    break;
    
    case 'projects':
    setRotatval('projects-rotate-basic');
    setTimeout(() => {
        navigate('/projects')
        window.scrollTo(
          {
            top: 700,
            left: 0,
            behavior: 'smooth'
          })
    }, 1000);
    break;
}

}

useEffect(() => {

  setTimeout(() => {
    setNavWrapperActive('navLinks_wrapper_active')
  }, 200);
  
  setTimeout(() => {
    setShowboxLinks('links-box-active')
  }, 700);

  setTimeout(() => {
    setBoxPosition('box-position-active')
  }, 1000);

  setTimeout(() => {
    navigate('/about')
    window.scrollTo(
      {
        top: 700,
        left: 0,
        behavior: 'smooth'
      })
  }, 2000);


}, [])



  return (
    <nav style={{height:'100vh'}} className='flex items-center relative justify-center'>
      {/* <div className={`${st.pointer_link} ${showboxLinks} ${boxPosition} absolute z-50`}>
        <span className='arrow-pointer'><AiFillCaretDown className='arrow-pointer-animation' style={{fontSize:'35px'}} /></span>
      </div> */}

      <div className={`${st.navLinks_wrapper} ${navWrapperActive} relative z-10 ${rotateval}`}>
      <div className="absolute z-0 w-full h-full rounded-full bg-black/20" />

        <div className={`${st.skills} skills-div relative z-50`}>
      <a href="" className={`${rotateval == 'skills-rotate'? 'border-b-2':''}`} onClick={(e)=> rotationFunc('skills',e)}>Skills</a>
        </div>

        <div className={`${st.about_certificates} overflow-hidden relative z-50`}>

          <div className={`${st.about} about-div`}>
            <a className={`${rotateval == 'about-rotate'? 'border-b-2':''} text-center block w-full`} onClick={(e)=> rotationFunc('about',e)} href="">About</a>
          </div>

          <div className={`${st.certificates} certificate-div`}>
            <a className={`${rotateval == 'certificate-rotate-from-about'? 'border-b-2':''} text-center block w-full`} onClick={(e)=> rotationFunc('certificates',e)} href="">Certificates</a>
          </div>

        </div>

        <div className={`${st.projects} projects-div overflow-hidden relative z-50`}>
          <a className={`${rotateval == 'projects-rotate-basic'? 'border-b-2':''} text-center block w-full`} onClick={(e)=> rotationFunc('projects',e)} href="">Projects</a>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar