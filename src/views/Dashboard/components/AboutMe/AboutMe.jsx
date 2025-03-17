import React from 'react'
import {sailingImg} from "../../../../const"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div>
      <header className="about-me-header section-header">
        <h1>About Me</h1>
        <div className="about-me-img-div">
           <img className="about-me-img" src={sailingImg} alt="" />
        </div>

      </header>

      <h4 className="mid-thin about-me-blurb">
        I'm a Fullstack Developer based in <span className="semi-bold">Los Angeles</span>, with a strong focus on
        frontend development while maintaining a deep understanding of
        lower-level languages to enhance my intuition for high-level operations.
        I thrive on bridging the gap between functionality and aesthetics,
        ensuring that every digital experience is both seamless and visually
        compelling. My approach to development goes beyond just writing code—I
        strive to create <em className="semi-bold">intuitive, efficient</em>, and <em className="semi-bold">engaging </em> <span className="">user experiences.</span>

      </h4>
    </div>
  )
}

export default AboutMe