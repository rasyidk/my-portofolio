import React from "react";

const Frontend = () =>{
    return(
       <div className="skills__content">

        <h3 className="skills__title">Frontend Developer</h3>
        <div className="skills__box">
            <div className="skills__group grid">

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__level">Pro</span>
                </div>

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__level">Pro</span>
                </div>

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                </div>

            </div>

            <div className="skills__group">

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">React JS</h3>
                    <span className="skills__level">Intermediate</span>
                </div>

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Next JS</h3>
                    <span className="skills__level">Basic</span>
                </div>

                <div className="skill__data"></div>
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Intermediate</span>
                </div>

            </div>
        </div>
       </div>
    )
}

export default Frontend