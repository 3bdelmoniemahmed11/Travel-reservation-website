import React ,{useEffect, useState} from 'react'

import video from "../../../src/assets/video(1).mp4"
import "./Home.css"
import {GrLocation } from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"
import Aos from "aos"
import "aos/dist/aos.css"


const Home = ({filteration,abdo}) => {
  const [fees,setFess]=useState("0");
  const filterHandeler=(e)=>
  {
    const value=e.target.value;
      setFess(value);
      filteration(value);
      abdo.current();
  }
  useEffect(()=>
  {
    Aos.init({duration :2000})  
  },[])
  return (
    <section className='home' id="home">
      <div className='overlay'>
      <div className='container'>
        <div className="row">
        <div className="col-lg-12">
        <div className='homeContent'>
          <p className='smallText' data-aos="fade-up">Our Packages</p>
          <h1 data-aos="fade-up">Search your Holiday</h1>
        </div> 
        <div data-aos="fade-up" className='card'>
          <div className='container'>
          <div className="row">
      
      <div className='col-lg-4'>
      <div className="form-group">
          <label htmlFor="city">Search your destination</label>
          <input type="text" className="form-control" placeholder="Enter your city"/>
          <GrLocation className="icon mapIcon"/>
       </div>   
      </div>

      <div className='col-lg-4'>
      <div className="form-group">
          <label htmlFor="date">Select your Date :</label>
          <input type="date" className="form-control"/>
       </div>   
      </div>

      <div className='col-lg-4'>
      <div className="form-group">
          <label htmlFor="price"> price :${fees}</label>
          <input  type="range" className="form-control" value={fees} onChange={filterHandeler} max="4000" min="0" step="100"/>
          
       </div>   
      </div>        
      </div>
      <button className="filterBtn">
          <HiFilter className="icon"/> 
          <span>MORE FILTERS</span>  
      </button>
          </div>
        </div> 

        <div className='homeIcons' data-aos="fade-up">
        <div className='rightIcons'>
          <a href="/#"><FiFacebook  className="icon"/></a>
         <a href="/#"><AiOutlineInstagram className="icon"/></a> 
        <a href="/#"><SiTripadvisor className="icon"/></a>  
        </div>
        <div className='leftIcons'>
          <a href="/#"><BsListTask className="icon"/></a> 
          <a href="/#"> <TbApps className="icon"/></a> 
        </div>
      </div>
     
       
      
        </div>
        </div>
      </div>


      </div>
      <video className='w-100' src={video} type="video/mp4" muted autoPlay loop ></video>
      
      
    </section>
      
  
  )
}

export default Home
