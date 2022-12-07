import React from 'react'
import video from "../../../src/assets/homeVideo.mp4"
import "./Home.css"
import {GrLocation } from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
import {BsListTask} from "react-icons/bs"
import {TbApps} from "react-icons/tb"



const Home = () => {
  return (
    <section className='home'>
      <div className='overlay'>
      <div className='container'>
        <div className="row">
        <div className="col-lg-12">
        <div className='homeContent'>
          <p className='smallText'>Our Packages</p>
          <h1 >Search your Holiday</h1>
        </div> 
        <div className='card'>
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
          <label htmlFor="price">Max price :</label>
          <span className='total'>$5000</span>
          <input type="range" className="form-control" max="5000" min="1000"/>
          
       </div>   
      </div>        
      </div>
      <button className="filterBtn">
          <HiFilter className="icon"/> 
          <span>MORE FILTERS</span>  
      </button>
          </div>
        </div> 

        <div className='homeIcons'>
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
