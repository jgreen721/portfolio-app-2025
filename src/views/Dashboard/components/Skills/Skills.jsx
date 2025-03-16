import React from 'react'
import { webDesignImg,webDevImg,mobileImg } from '../../../../const'
import "./Skills.css"

const Skills = () => {



  const skills=[
    {id:1,name:"Web Design",blurb:"The most modern and high-quality designs made at a professional level",img:webDesignImg},
    {id:2,name:"Web Development",blurb:"Sleek design, seamless functionality, and professional execution",img:webDevImg},
    {id:3,name:"Mobile Apps",blurb:"Modern solutions for your brand with iOS and Android-compatible apps.",img:mobileImg},
  ]
  return (
    <div className="skills-section">
      <ul className="skills">
      {skills.map(skill=>(
        <li key={skill.id} className="skill-item">
          <div className="skill-img-div">
            <img className="skill-img" src={skill.img} alt="" />
          </div>
          <div className="title-div">
            {skill.name.split(" ").map((word,idx)=>(
              <h3 className="title-h3" key={idx}>
              <span className="taller-h3">{word[0]}</span>
              <span className="mid-thin">{word.slice(1,word.length).length < 10 || innerWidth > 650 ? word.slice(1,word.length) : word.slice(1,3)}</span>
              </h3>
            ))}
            
          </div>

          <div className="blurb-div">
            <h5 className="skill-blurb-h5">{skill.blurb}</h5>
            <div className="patch-up patch-up-top-left"></div>
            <div className="patch-up patch-up-bottom-left"></div>
            <div className="patch-up patch-up-top-right"></div>
            <div className="patch-up patch-up-bottom-right"></div>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Skills