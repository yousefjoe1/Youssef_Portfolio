import React, { useEffect, useState } from 'react'

import { AiFillCaretDown } from 'react-icons/ai';

import st from './nav.module.css'

import meimg from './me.png'
import { useNavigate } from 'react-router-dom'

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
      <div className={`${st.pointer_link} ${showboxLinks} ${boxPosition} absolute`}>
        <span className='arrow-pointer'><AiFillCaretDown className='arrow-pointer-animation' style={{fontSize:'35px'}} /></span>
      </div>

      <div className={`${st.navLinks_wrapper} ${navWrapperActive} relative ${rotateval}`}>

        <div className={`${st.skills} skills-div`}>
          <a href="" className='' onClick={(e)=> rotationFunc('skills',e)}>Skills</a>
        </div>

        <div className={`${st.about_certificates}`}>

          <div className={`${st.about} about-div`}>
            <a onClick={(e)=> rotationFunc('about',e)} href="">About</a>
          </div>

          <div className="my_img">
            <img className='w-40 rounded-md' src={meimg} alt="" />
          </div>

          <div className={`${st.certificates} certificate-div`}>
            <a onClick={(e)=> rotationFunc('certificates',e)} href="">Certificates</a>
          </div>

        </div>

        <div className={`${st.projects} projects-div`}>
          <a onClick={(e)=> rotationFunc('projects',e)} href="">Projects</a>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar