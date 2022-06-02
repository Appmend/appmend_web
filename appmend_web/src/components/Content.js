import React from "react";
import './Content.css'
import phone from '../static/iPhone X.svg'
import appstore from '../static/appstore.svg'
import playstore from '../static/playstore.svg'

const Content = () =>{
    return(
        <div className="body">
            <div className="content">
                <p className="c-text">We got all your health needs !</p>
                <p className="description">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                <div className="right-nav">
                    <img src={playstore} alt="playstore"/>
                    <img src={appstore} alt="appstore"/>
                </div>
            </div>
            <div className="phone">
                <img src={phone} alt='phone'/>
            </div>
        </div>
    );
}
export default Content