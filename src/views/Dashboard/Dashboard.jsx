import React from 'react'
import {AboutMe,Samples,Skills,Testimonials} from "./components"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <AboutMe/>
      <Skills/>
      <Samples/>
    </div>
  )
}

export default Dashboard