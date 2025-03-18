import React, {useRef, useState} from 'react'
import "./Form.css"

const Form = () => {
    const formRef = useRef();
    const [clientError,setClientError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [messageError,setMessageError] = useState(false);

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        let formData = new FormData(formRef.current);

        let userMessage={
            client:formData.get("client"),
            email:formData.get("email"),
            message:formData.get("message")
        }
        console.log("Message",userMessage);
        let isValid = true
        if(!userMessage.client){
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
            console.log("cleaer errors!!")
            setTimeout(()=>{
                setClientError(false);
                setEmailError(false);
                setMessageError(false);
            },2750);
            return
        }
        formRef.current["client"].value=""
        formRef.current["email"].value=""
        formRef.current["message"].value=""
    }
  return (
    <div className="contact-form-section">
        <h2>Contact Form</h2>
        <form onSubmit={handleFormSubmit} className="contact-form" ref={formRef}>
            <div className="form-row">
                <div className="form-div">
                    <input type="text" name="client" placeholder="Full name" className="form-control" autoComplete="off"  />
                    <div className="form-error-div">
                        <p style={{"--duration":"1s","--delay":"0s"}} className={`error-text ${clientError ? 'clear-blur' : 'fade-out-blur'}`}>Must provide name</p>
                    </div>
                </div>
                <div className="form-div">
                    <input type="text" name="email" placeholder="Email address" className="form-control" autoComplete="off"  />
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
                <button className="form-btn"> Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Form