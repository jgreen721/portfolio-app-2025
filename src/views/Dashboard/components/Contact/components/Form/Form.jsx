import React, {useRef, useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';
import { BsSend } from "react-icons/bs";

import "./Form.css"


// console.log(import.meta.env)

const Form = () => {
    const formRef = useRef();
    const progressRef = useRef();
    const [clientError,setClientError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [messageError,setMessageError] = useState(false);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        // console.log("ENV_VARIABLES",import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID )

        let formData = new FormData(formRef.current);

        let userMessage={
            name:formData.get("user_name"),
            email:formData.get("user_email"),
            message:formData.get("message")
        }
        console.log("Message",userMessage);
        let isValid = true
        if(!userMessage.name){
                isValid = false;
                setClientError(true)
        }
        if(!userMessage.email){
            isValid = false;
            setEmailError(true)
        }
        if(!userMessage.message){
        isValid = false;
        setMessageError(true)
        }
        if(!isValid){
            console.log("clear errors!!")
            setTimeout(()=>{
                setClientError(false);
                setEmailError(false);
                setMessageError(false);
            },2750);
            return
        }
handleEmail();
        // console.log("ENV_VARIABLES",import.meta.env)

    }

    const handleEmail=()=>{
        emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
          publicKey: import.meta.env.VITE_API_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            formRef.current["user_name"].value=""
            formRef.current["user_email"].value=""
            formRef.current["message"].value=""
            growProgress();
          },
          (error) => {
            console.log('FAILED...', error);
          },
        );

    }


    const growProgress=()=>{
        progressRef.current.style.width = `0px`
        progressRef.current.classList.remove("celebrate-progress")

       let progressInt;
       let width = 0;

       progressInt = setInterval(()=>{
           width++;
           console.log(`Width:${width}%`);
       progressRef.current.style.width = `${width}%`

           if(width >= 100){
               clearInterval(progressInt)
               setTimeout(()=>{
                //    width = 0;
                //    progressRef.current.style.width = `${width}%`
                progressRef.current.classList.add("celebrate-progress")

               },1250);
            }
       },10)
    }



  return (
    <div className="contact-form-section">
        <header>
            <h2>Contact Form</h2>
            <div className="h5-border-sign">
                <h5 className="mid-thin">Lets bring <em>your</em> vision to life!</h5>
            </div>
            <div className="contact-progress">
                <div ref={progressRef} className="email-progress">
                <h4>Successfully Sent</h4>

                </div>
            </div>
        </header>
        <form onSubmit={handleFormSubmit} className="contact-form" ref={formRef}>
            <div className="form-row">
                <div className="form-div">
                    <input type="text" name="user_name" placeholder="Full name" className="form-control" autoComplete="off"  />
                    <div className="form-error-div">
                        <p style={{"--duration":"1s","--delay":"0s"}} className={`error-text ${clientError ? 'clear-blur' : 'fade-out-blur'}`}>Must provide name</p>
                    </div>
                </div>
                <div className="form-div">
                    <input type="text" name="user_email" placeholder="Email address" className="form-control" autoComplete="off"  />
                    <div className="form-error-div">
                        <p style={{"--duration":"1s","--delay":"0s"}} className={`error-text ${emailError ? 'translate-to-zero' : 'translate-y-down'}`}>Invalid email</p>
                    </div>
                </div>
            </div>
            <div className="form-div">
                <textarea name="message" placeholder="Your Message" id="" className="form-text" rows="7"></textarea>
                <div className="form-error-div">
                        <p style={{"--duration":"1s","--delay":"0s"}} className={`error-text ${messageError ? 'restore-x-right' : 'translate-x-right'}`}>Invalid message</p>
                    </div>
            </div>
            <div className="form-div flex-end">
                <button className="form-btn">
                    <BsSend />
                    <h4> S<span className="mid-thin">end</span> M<span className="mid-thin">essage</span></h4>
                    <div className="btn-overlay"></div>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Form