import React from 'react'
import {sampleImg1a,sampleImg1b, sampleImg2a,sampleImg2b,sampleImg3a,sampleImg3b} from "../../../../const"

import "./Samples.css"

const Samples = () => {
  const samples =[
    {id:1,title:"Tech bookclub",image1:sampleImg1a,image2:sampleImg1b},
    {id:2,title:"Finance Tracker",image1:sampleImg2a,image2:sampleImg2b},
    {id:3,title:"Hangman",image1:sampleImg3a,image2:sampleImg3b},
  ]
  return (
    <div className="samples-section">
      <ul className="samples">
      {samples.map(sampleItem=>(
        <li key={sampleItem.id} className="sample-item">
          <div className="sample-img-a-div">
            <img className="sample-img-a" src={sampleItem.image1} alt="" />
          </div>
          <div className="sample-img-b-div">
            <img className="sample-img-b" src={sampleItem.image2} alt="" />
          </div>
          <div className="sample-title-div">
            <h3 className="sample-title">{sampleItem.title}</h3>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Samples