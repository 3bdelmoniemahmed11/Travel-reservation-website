import React from 'react'
import './Navbar.css'
import {MdOutlineTravelExplore} from "react-icons/md"
import {TbGridDots} from "react-icons/tb"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" href="/#"><MdOutlineTravelExplore className="icon"/>Travel </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><TbGridDots className="icon" /></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mx-auto">
        <li className="nav-item">
          <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#main">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#footer">Contact</a>
        </li>
        <button type="button" className='bookBtn'><a href="/#">Book Now</a></button>
      </ul>
     
    </div>
  </nav>
  )
}

export default Navbar
