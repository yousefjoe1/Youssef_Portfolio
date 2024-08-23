import React from 'react'

import img1 from "./Certf/c1.png";
import img2 from "./Certf/c2.png";
import img3 from "./Certf/c3.png";
import img4 from "./Certf/c4.png";
import img5 from "./Certf/c5.png";
import img6 from "./Certf/c6.png";
import alx from "./Certf/alx.png";

import './certif.css'

const Certificates = () => {
  return (
    <section>
      <h1 className='font-bold text-center text-white' style={{fontSize:'25px'}}>Certificates</h1>

    <div className="certificates-container flex justify-center flex-wrap">

        <div className="single-certificate m-7" style={{width:'500px',height:'500px'}}>
          <img className='w-full h-full object-contain rounded-lg' src={alx} alt="" />
        </div>

        <div className="single-certificate m-7" style={{width:'500px',height:'500px'}}>
          <img className=' w-full h-full object-contain rounded-lg' src={img1} alt="" />
        </div>

        <div className="single-certificate  m-7" style={{width:'500px',height:'500px'}}>
          <img className='object-contain rounded-lg' style={{width:'100%',height:'100%'}}  src={img2} alt="" />
        </div>

        <div className="single-certificate  m-7" style={{width:'500px',height:'500px'}}>
          <img className='object-contain rounded-lg'  style={{width:'100%',height:'100%'}} src={img3} alt="" />
        </div>

        <div className="single-certificate  m-7" style={{width:'500px',height:'500px'}}>
          <img className='object-contain rounded-lg' style={{width:'100%',height:'100%'}} src={img4} alt="" />
        </div>

        <div className="single-certificate  m-7" style={{width:'500px',height:'500px'}}>
          <img className='object-contain rounded-lg' style={{width:'100%',height:'100%'}} src={img5} alt="" />
        </div>

        <div className="single-certificate  m-7" style={{width:'500px',height:'500px'}}>
          <img className='object-contain rounded-lg' style={{width:'100%',height:'100%'}} src={img6} alt="" />
        </div>

    </div>

    </section>
  )
}

export default Certificates