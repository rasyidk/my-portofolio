import React from "react";

const ScrollDown = () =>{
    return (

        <div className="home__scroll">
            <a href="#about" className="home_scroll-button button--flex">

            <svg width="32px" height="32px" className="home__scroll-mouse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V6M12 22V22C15.866 22 19 18.866 19 15V9C19 5.13401 15.866 2 12 2V2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className="home__scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow" ></i>
            </a>
        </div>
    )

}

export default ScrollDown