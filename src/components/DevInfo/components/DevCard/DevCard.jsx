import React from 'react'
import {customAvatar,darkModeCustomAvatar, darkAvatarBg,lightAvatarBg} from "../../../../const"
import ThemePicker from "../ThemePicker/ThemePicker"
import Signature from "../Signature/Signature"
import "./DevCard.css"

const DevCard = ({handleAppTheme,appTheme}) => {

  return (
    <div className="avatar-devname-div">
    <div className="avatar-div">
      <div className="avatar-img-div">
        <img style={{"--duration":".5s","--delay":"0s"}} className={`avatar-bg ${appTheme == "light" ? "clear-blur" : "fade-out-blur"}`} src={lightAvatarBg} alt="" />
        <img style={{"--duration":".5s","--delay":"0s"}} className={`avatar-bg dark-avatar-bg ${appTheme == "dark" ? "clear-blur" : "fade-out-blur"}`} src={darkAvatarBg} alt="" />
        <img style={{"--duration":"1s","--delay":`0s`}} className={`avatar-img ${appTheme == "light" ? "translate-to-zero" : "translate-y-down"}`} src={customAvatar} alt="" />
        <img style={{"--duration":"1s","--delay":`0s`}} className={`avatar-img dark-avatar-img ${appTheme == "dark" ? "translate-to-zero" : "translate-y-down"}`} src={darkModeCustomAvatar} alt="" />
      </div>
    </div>
    <div className='devcard-content'>
      <Signature appTheme={appTheme}/>
      <div className="role-theme-div">
        <div className="h5-role-div">
          <h5 className="h5-role no-whitespace">Web Developer</h5>
        </div>
        <div className="themepicker-div">
          <ThemePicker appTheme={appTheme} handleAppTheme={handleAppTheme}/>
        </div>
      </div>
    </div>

  </div>
  )
}

export default DevCard