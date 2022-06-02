import React from "react";
import './Footer.css'
import flogo from '../static/flogo.svg'
import sociallinks from '../static/Sociallinks.png'


const Footer = () => {
    return(
        <>
            <div className="footer"> 
                <div className="company-info">
                    <img className="flogo" src={flogo} alt="logo"/>
                    <p className="copyright">© 2021 Appmend Inc. All rights reserved</p>
                    <img className="sociallinks" src={sociallinks} alt="sociallinks"/>

                </div>
                <div className="links">

                    <div className="col1">
                        <p className="list-heading">Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                        </ul>
                    </div> 
                    <div className="col2">
                        <p className="list-heading">Support</p>
                        <ul>
                            <li>Help Center</li>
                            <li>Terms of service</li>
                            <li>Legal</li>
                            <li>Privacy Policy</li>
                            <li>Status</li>
                        </ul>
                    </div>
                    <div className="col3">
                        <p className="list-heading">Stay up to date</p>
                        <input placeholder="Your email address"/>
                    </div>
                </div>
            </div>      
        </>
    )
}

export default Footer