import React, { useState } from "react";
import './servises.css'

const Services = () =>{


    const [toggleState, setToggleState] =useState(0);
    const toggletab = (index) =>{
        setToggleState(index);
    }

    return(
        <section className="services section" id="services">   
                <h2 className="section__title">Services</h2>

                <span className="section__subtitle">What i offer</span>
                
                <div className="services__container container grid">

                    <div className="services__content">

                        <div>
                            <i className="uil uil-web-grid services__icon"></i>

                            <h3 className="services__title">Product <br/> Designer</h3>

                            <span className="services__button" onClick={() => toggletab(1)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>

                            <div className= {toggleState ===1 ? "services__modal active-modal" : "services__modal"}>
                                    <div className="services__modal-content">
                                        <i className="uil uil-times services__modal-close" onClick={() => toggletab(0)}></i>


                                        <h3 className="services__modal-title">Product Designer</h3>

                                        <p className="services__modal-description">
                                            Service than 3 years Exprirence providing quality work to clients and companies

                                        </p>

                                        <ul className="services__modal-services grid">

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Develop user interface</p>    
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Webpage dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Mobile dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">I position your company brand</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Design mockups of products for companis</p>    
                                                
                                            </li> 
                                        </ul>
                                    </div>



                            </div>
                        </div>
                    </div>

                    <div className="services__content">

                        <div>
                            <i className="uil uil-web-grid services__icon"></i>

                            <h3 className="services__title">Product <br/> Designer</h3>

                            <span className="services__button" onClick={() => toggletab(2)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>

                            <div className= {toggleState ===2 ? "services__modal active-modal" : "services__modal"}>
                                    <div className="services__modal-content">
                                        <i className="uil uil-times services__modal-close" onClick={() => toggletab(0)}></i>


                                        <h3 className="services__modal-title">Product XX</h3>

                                        <p className="services__modal-description">
                                            Service than 3 years Exprirence providing quality work to clients and companies

                                        </p>

                                        <ul className="services__modal-services grid">

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Develop user interface</p>    
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Webpage dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Mobile dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">I position your company brand</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Design mockups of products for companis</p>    
                                                
                                            </li> 
                                        </ul>
                                    </div>



                            </div>
                        </div>
                    </div>

                    <div className="services__content">

                        <div>
                            <i className="uil uil-web-grid services__icon"></i>

                            <h3 className="services__title">Product <br/> Designer</h3>

                            <span className="services__button" onClick={() => toggletab(3)}>View More
                            <i className="uil uil-arrow-right services__button-icon"></i>
                            </span>

                            <div className= {toggleState ===3 ? "services__modal active-modal" : "services__modal"}>
                                    <div className="services__modal-content">
                                        <i className="uil uil-times services__modal-close"  onClick={() => toggletab(0)}></i>


                                        <h3 className="services__modal-title">Product 3</h3>

                                        <p className="services__modal-description">
                                            Service than 3 years Exprirence providing quality work to clients and 3

                                        </p>

                                        <ul className="services__modal-services grid">

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Develop user 3</p>    
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Webpage dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Mobile dev</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">I position your company brand</p>    
                                                
                                            </li> 

                                            <li className="services__modal-service">
                                                <i className="uil uil-check-circle services__modal-icon"></i>
                                                <p className="service__modal-info">Design mockups of products for companis</p>    
                                                
                                            </li> 
                                        </ul>
                                    </div>



                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Services