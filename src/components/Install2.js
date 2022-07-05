import React from "react";
import "./install.css";
import installscreen from "../static/MockCreative.svg";

export default function InstallSecond(){
    return(
        <div className="install">
        <div className="intsall-contentII">
            <p className="install-text">Install the device few easy steps.</p>
            <p className="install-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        </div>
        <div className="install-screen2">
            <img src={installscreen} alt="screen"/>
        </div>

        </div>
    )
}