import React, {useRef, useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

import { BsSend } from "react-icons/bs";

import "./Form.css"


// console.log(import.meta.env)

const Form = () => {
    const formRef = useRef();
    const progressRef = useRef();
    const toasterContentRef = useRef();
    const [showToast,setShowToast] = useState(false);
    const [clientError,setClientError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [messageError,setMessageError] = useState(false);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(showToast){
            //already processing email send
            return;
        }

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
            toasterContentRef.current.classList.remove("unblur-content");
            setShowToast(true);

            console.log('SUCCESS!');
            setTimeout(()=>shrinkProgress(100),850);

          },
          (error) => {
            console.log('FAILED...', error);
          },
        );

    }


    const shrinkProgress=(progressPercent)=>{

    let progressInt;
        progressInt = setInterval(()=>{
           progressRef.current.style.transform = `scaleX(${progressPercent}%)`
           progressPercent--; 
           
           if(progressPercent < 55 && !toasterContentRef.current.classList.contains("unblur-content")){
               toasterContentRef.current.classList.add("unblur-content");
           }

           if(progressPercent <= 0){
               clearInterval(progressInt)
               setShowToast(false);
               formRef.current["user_name"].value=""
               formRef.current["user_email"].value=""
               formRef.current["message"].value=""
            }
       },25);
    }



  return (
    <div className="contact-form-section">
        <header>
            <h2 onClick={()=>setShowToast(showToast=>showToast=!showToast)}>Contact Form</h2>
            <div className="h5-border-sign">
                <h5 className="mid-thin">Lets bring <em>your</em> vision to life!</h5>
            </div>
            {/* <div className="contact-progress">
                <div ref={progressRef} className="email-progress">
                    <h4>Successfully Sent</h4>
                </div>
            </div> */}
            <div className={`email-toaster ${showToast ? 'show-toaster' : 'hide-toaster'}`}>
                <div ref={toasterContentRef} className="email-toaster-column">
                    <div className="check-div">
                        <IoMdCheckmark/>
                    </div>
                    <div>
                        <h2 className="mb-1">S<span className="mid-thin">uccess</span></h2>
                        <h4 className="mid-thin">Your email has been sent</h4>
                    </div>
                </div>
                {/* <button onClick={()=>setShowToast(false)} className="close-btn">
                    <IoCloseOutline/>
                </button> */}
                <div ref={progressRef} className="toaster-progress"></div>

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