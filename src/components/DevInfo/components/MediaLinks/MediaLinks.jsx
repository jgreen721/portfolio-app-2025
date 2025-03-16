import React from 'react'
import { FaCodepen,FaInstagram } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import "./MediaLinks.css"

const MediaLinks = () => {
  const mediaLinks = [
    {
      id: 1,
      name: "Codepen",
      icon: <FaCodepen />,
      link: "https://codepen.io/jgreen721",
    },
    {
      id: 2,
      name: "FrontEndMentor",
      icon: <SiFrontendmentor />,
      link: "https://www.frontendmentor.io/profile/jgreen721",
    },
    {
      id: 3,
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/justng2d1/",
    },
  ];
  return (
    <div className="media-links-section">
      <ul className="media-links">

      {mediaLinks.map(mediaLink=>(
        <li className="media-link-item" key={mediaLink.id}>
          <a href={mediaLink.link} target="_blank" className="media-link">
          {mediaLink.icon}
          </a>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default MediaLinks