import React from 'react'
import "./Footer.css"
import {FiSend} from "react-icons/fi"
import {MdOutlineTravelExplore} from "react-icons/md"
import {AiOutlineTwitter,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"

const Footer = () => {
  return (
    <section className='footer'>
            <div className='container'>
                <div className='row '>
                    <div className="col-lg-12 offset-lg-3 d-flex ">
                    <div className='footerText'>
                    <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" placeholder="Enter your city"></input>
                        <button  className="standardBtn sendBtn" type="submit">
                            Send <FiSend className="icon"/>
                        </button>
                        </div>  
                    </div>
                </div>
                <div className='footerInfo'>
                <div className='container'>
                <div className='row'>
                <div className='col-lg-6'>
                <div className='footerLogo'><a href="/#"><MdOutlineTravelExplore className="icon"/>Travel</a></div>
                <div className='footerPragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                 sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
                <div className='footerSocials'>
                    <AiOutlineTwitter className="icon"/>
                    <AiFillYoutube className="icon"/>
                    <AiFillInstagram className="icon"/>
                    <FaTripadvisor className="icon"/>
                </div>

                </div>
                <div className="col-lg-2">
                <div className='group-title'>Our Agency</div>
                    <ul className='list-unstyled'>
                        <li><FiChevronRight className="icon"/>Services</li>
                        <li><FiChevronRight className="icon"/>Insurance</li>
                        <li><FiChevronRight className="icon"/>Agency</li>
                        <li><FiChevronRight className="icon"/>Tourism</li>
                        <li><FiChevronRight className="icon"/>Payment</li>
                    </ul>
                </div>
                <div className="col-lg-2">
                <div className='group-title'>Pratiners</div>
                    <ul className='list-unstyled'>
                        <li><FiChevronRight className="icon"/>Booking</li>
                        <li><FiChevronRight className="icon"/>RentalCar</li>
                        <li><FiChevronRight className="icon"/>HostelWorld</li>
                        <li><FiChevronRight className="icon"/>Trivago</li>
                        <li><FiChevronRight className="icon"/>TripAdvisor</li>
                    </ul>
                </div>
                <div className="col-lg-2">
                <div className='group-title'>Last Minute</div>
                    <ul className='list-unstyled'>
                        <li><FiChevronRight className="icon"/>London</li>
                        <li><FiChevronRight className="icon"/>Cailfornia</li>
                        <li><FiChevronRight className="icon"/>Indonesia</li>
                        <li><FiChevronRight className="icon"/>Europe</li>
                        <li><FiChevronRight className="icon"/>Oceania</li>
                    </ul>
                </div>
                     

                </div>

                </div>
                </div>
                
            </div>
    </section>

  )
}

export default Footer
