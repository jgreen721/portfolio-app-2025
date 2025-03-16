import React from 'react'
import {AboutMe,Samples,Skills,Testimonials,Contact} from "./components"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <AboutMe/>
      <Skills/>
      <Samples/>
      <Contact/>
    </div>
  )
}

export default Dashboard