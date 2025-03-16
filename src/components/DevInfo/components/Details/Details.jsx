import React from 'react'
import { AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import {DetailItem} from "./components"
import "./Details.css"




const Details = () => {
  const detailItems = [
    {
      id: 1,
      name: "Email",
      value: "justngreen721@gmail.com",
      icon: <AiOutlineMail />,
      duration:"15s",
      delay:"1s"
    },
    { id: 2, 
      name: "Phone",
      value: "(774)-571-0178", 
      icon: <AiOutlinePhone />,  
      duration:"12s",
      delay:"3.2s" 
    },
    { 
      id: 3, 
      name: "Birthday", 
      value: "July 21", 
      icon: <SlCalender />,  
      duration:"8s",
      delay:"0s" 
    },
    {
      id: 4,
      name: "Location",
      value: "Los Angeles, California,USA",
      icon: <CiLocationOn />,
      duration:"11s",
      delay:"1s"
    },
  ];
  return (
    <div className="details-section">
        {detailItems.map(detail=>(
            <DetailItem key={detail.id} detail={detail}/>
        ))}
    </div>
  )
}

export default Details