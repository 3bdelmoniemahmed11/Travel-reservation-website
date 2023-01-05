import React, { useEffect, useState } from "react";

import video from "../../../src/assets/video(1).mp4";
import "./Home.css";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = ({ filteration, filter }) => {
  const [fees, setFess] = useState("0");
  const filterHandeler = (e) => {
    const value = e.target.value;
    setFess(value);
    filteration(value);
    filter.current();
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home" id="home">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="homeContent">
                <p className="smallText" data-aos="fade-up">
                  Our Packages
                </p>
                <h1 data-aos="fade-up">Search your Holiday</h1>
              </div>
              <div data-aos="fade-up" className="card">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6  offset-lg-3">
                      <div className="form-group">
                        <label htmlFor="price"> price :${fees}</label>
                        <input
                          type="range"
                          className="form-control"
                          value={fees}
                          onChange={filterHandeler}
                          max="4000"
                          min="0"
                          step="100"
                        />
                        <small>
                          scroll the bar to filter travel based on price ,return
                          to zero to get all travels
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="homeIcons" data-aos="fade-up">
                <div className="rightIcons">
                  <a href="/#">
                    <FiFacebook className="icon" />
                  </a>
                  <a href="/#">
                    <AiOutlineInstagram className="icon" />
                  </a>
                  <a href="/#">
                    <SiTripadvisor className="icon" />
                  </a>
                </div>
                <div className="leftIcons">
                  <a href="/#">
                    <BsListTask className="icon" />
                  </a>
                  <a href="/#">
                    {" "}
                    <TbApps className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video
        className="w-100"
        src={video}
        type="video/mp4"
        muted
        autoPlay
        loop
      ></video>
    </section>
  );
};

export default Home;
