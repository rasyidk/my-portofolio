import React,{ useState } from "react";
import './qualification.css'


const Qualification = () =>{

    const [toggleState, setToggleState] =useState(1 );
    const toggletab = (index) =>{
        setToggleState(index);
    }


    return (
        <section className="qualification section">

            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal journey</span>
        
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggletab(1)} className={toggleState ===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                    
                    >

                        <i className="uil uil-graduation-cap  qualification__icon"> </i> {" "}
                        Education
                    </div>

                    <div onClick={() => toggletab(2)} className={toggleState ===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>

                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HIGH SCHOOL</h3>
                                <span className="qualification__subtitle">SMP N 1 Sleman</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2014-2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Vocational Student</h3>
                                <span className="qualification__subtitle">SMK N 2 Depok</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2017-2021
                                </div>
                            </div>
                            
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">University</h3>
                                <span className="qualification__subtitle">Universitas Gadjah Mada</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2019-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        
                    </div>

                    <div className={ toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualification__subtitle">PT Kedata Indonesia Digital</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">CV BIT TECHNOLOGY</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2020-2021
                                </div>
                            </div>
                            
                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">Freelance</span>

                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"/>
                                    2021-Presen
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>


                        
                    </div>

                </div>
            </div>
        
        </section>
    )
}

export default Qualification