import React from "react";
import AboutImg from  "../../assets/rasyid.jpg"
import CV from "../../assets/cv-rasyid.pdf"
import Info from "./Info";
import './about.css'

const About = () =>{
    return(
        <section className="about section" id="about">

            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My Introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
            
                <div className="about__data">
                    <Info />

                    <p className="about__description">Software developer, I create website, Mobile App, Internet of Things Development</p>

                    <a download="" href={CV} className="button button--flex">Download CV
                    
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M12.5 11H8M11.5 15H8M16 7H8M18 18V12.5C18 11.6716 18.6716 11 19.5 11C20.3284 11 21 11.6716 21 12.5V18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V14" stroke="var(--container-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}


export default About