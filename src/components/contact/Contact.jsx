import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'
const Contact = () =>{
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_90ew4v8', 'template_hvakxho', form.current, 'QcdQeEFIgYNjqpCdp')
        e.target.reset()
      };

      
    return(
        <div className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        

                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                             <h3 className="contact__card-title">Email</h3>
                             <span className="contact__card-data">rasyidkusnady@gmail.com</span>
                             <a href="mailto:rasyidkusnady@gmail.com" className="contact__button">Write me 
                             <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                             </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                             <h3 className="contact__card-title">Whatsapp</h3>
                             <span className="contact__card-data">0858 4268 8724</span>
                             <a href="https://api.whatsapp/send?phone=6285842688724" className="contact__button">Write me 
                             <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                             </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-messenger contact__card-icon"></i>
                             <h3 className="contact__card-title">Messnger</h3>
                             <span className="contact__card-data">Rasiet xrase</span>
                             <a href="https://m.me/crypticalcoder" className="contact__button">Write me 
                             <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                             </a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form  ref={form} onSubmit={sendEmail} className="contact__form">

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Name</label>
                            <input name="name" type="text" className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label htmlFor="" className="contact__form-tag">Email</label>
                            <input name="email" type="email" className="contact__form-input" placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label htmlFor="" className="contact__form-tag">Project</label>
                            <textarea name="project" id="" cols="30" rows="10" className="contact__form-input" placeholder="write your project"></textarea>
                            
                        </div>

                        <button href="#contact" className="button button--flex">
                            Send Message

                            2.35
                            
                            <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                            <path  stroke="var(--container-color)" d="M18.8951 3.61502C19.7248 3.37794 20.492 4.1451 20.2549 4.97489L16.2553 18.9736C15.8267 20.4736 13.823 20.7554 12.9973 19.4317L10.1999 14.947C9.87715 14.4296 9.44039 13.9928 8.92298 13.6701L4.43823 10.8726C3.11455 10.047 3.39632 8.04323 4.89636 7.61465L18.8951 3.61502Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path    d="M10.1924 13.6777L13.7279 10.1422" stroke="var(--container-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact