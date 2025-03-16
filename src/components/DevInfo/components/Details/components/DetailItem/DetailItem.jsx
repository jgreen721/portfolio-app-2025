import React from 'react'
import "./DetailItem.css"

const DetailItem = ({detail}) => {
  return (
    <li style={{"--duration":detail.duration,"--delay":detail.delay}} className="detail-item">
        <div className="icon-div">
            {detail.icon}
        </div>
        <div className="detail-item-content">
            <h3 className="mid-thin mb-1">{detail.name}</h3>
            <h4 className="no-whitespace">{detail.value}</h4>
        </div>
    </li>
  )
}

export default DetailItem