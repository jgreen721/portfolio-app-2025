import React from 'react'
import { Map,Form } from './components'
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <header className="contact-header section-header">
        <h1>Contact <span className="text-secondary">Me</span></h1>
      </header>
        <Map/>
        <Form/>     
     </div>
  )
}

export default Contact