import React from "react";
import './Navbar.css'
import logo from '../static/Logo.svg'

const Navbar = () =>{
    return(
        <>
            <div className="header">
                <nav className="navbar">
                    <img className="logo" src ={logo} alt="logo"/>
                    <ul className="nav-items">
                        <li>About</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </nav>

            </div>
            
        </>
        
    );
}

export default Navbar