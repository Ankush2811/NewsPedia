import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
        
            
        
        <div className="footer-icons">
            <ul className="navbar-nav ">
                
                <li className="nav-item inline-block">
                    <a href="https://medium.com/@ankush2811" aria-label="Medium" className="nav-link text-medium">

                        <span><img className="img-circle medium-icon" width="24" alt="" 
                                src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"/></span></a>
                </li>

                <li className="nav-item inline-block">
                    <a href="https://github.com/Ankush2811" aria-label="Github" className="nav-link text-github">

                        <span><img className="img-circle medium-icon" width="24" alt=""
                                src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"/></span></a>
                </li>

                <li className="nav-item inline-block">
                    <a href="https://www.linkedin.com/in/ankush-soni-0474ab142/" aria-label="Linkedin" className="nav-link text-linkedin">

                        <span><img className="img-circle medium-icon" width="24" alt=""
                                src="https://seeklogo.com/images/L/linked-in-linkedin-logo-92FF20BA9B-seeklogo.com.png"/></span></a>
                </li>
                
            </ul>
        </div>
        <div className="copy">
    <h5  className="text-center copyright"> ©Ankush Soni.All Rights Reserved.</h5>
    </div>
        </>
    )
}

export default Footer