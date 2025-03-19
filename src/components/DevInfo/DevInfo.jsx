import React, {useState} from 'react'
import {DevCard,Details,MediaLinks} from "./components"
import "./DevInfo.css"

const DevInfo = ({handleAppTheme,appTheme}) => {
    const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="dev-info-container">
      <DevCard handleAppTheme={handleAppTheme} appTheme={appTheme}/>
      <div className="desktop w-full">
        <Details/> 
      </div> 
      <div className="desktop w-full">
        <MediaLinks/>
      </div>
      <button onClick={()=>setShowContacts(showContacts=>showContacts = !showContacts)} className="btn dev-info-menu-btn mobile-tablet">Show Contacts</button>
      <div className={`mobile-tablet mobile-contacts-menu-parent ${showContacts ? '' : 'hide-mobile-dev-menu'}`}>
        <div className={`menu-accordion mobile-contacts-menu`}>
          <Details/>
          <MediaLinks/>
        </div>
      </div>
    </div>
  )
}

export default DevInfo