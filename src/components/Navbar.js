import React from "react";
import './Navbar.css'
import logo from '../static/Logo.svg'

const Navbar = () =>{
    return(
        <>
            <div className="header row">
                {/* <nav className="navbar">
                    <img className="logo" src ={logo} alt="logo"/>
                    <ul className="nav-items">
                        <li>About</li>
                        <li>Products</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </nav> */}
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid d-flex flex-row justify-content-between ">
                        <img className="logo" src ={logo} alt="logo"/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="nav-items navbar-nav ">
                                <li className="nav-item" >About</li>
                                <li className="nav-item">Products</li>
                                <li className="nav-item">Blog</li>
                                <li className="nav-item">Careers</li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>

            </div>
            
        </>
        
    );
}

export default Navbar