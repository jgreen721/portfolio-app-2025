import React from 'react'
import {DevCard,Details,MediaLinks} from "./components"



import "./DevInfo.css"

const DevInfo = ({handleAppTheme,appTheme}) => {




  return (
    <div className="dev-info-container">
      <DevCard handleAppTheme={handleAppTheme} appTheme={appTheme}/>
      <div className="desktop w-full">
        <Details/> 
      </div> 
      <div className="desktop w-full">
        <MediaLinks/>
      </div>
      <div className="mobile-tablet mobile-dev-info-menu">
        <h1>Mobile STuffs!!</h1>
      </div>
    </div>
  )
}

export default DevInfo