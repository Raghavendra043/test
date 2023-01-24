import React from "react";
import './hero_css.css'
import R from '../assets/r.svg'

export default function Hero(){
    return (
        <div className="main">
            
            <div className="title">
                
                <div className="first_title">Hi !! , I'm </div>
                
                <div className="second">
                    <img src={R} className ="R"></img><div className="second_title" >aghav</div>
                </div>
                    
                <div className="subTitle">Lorem Ipsum</div>

                
            </div>

            <div className="root"> $ root : </div>
        </div>
    );
}