import React from "react";
import './CSS/banner.css'
import IMG from "./images/56d6df45ae3b12b895e11cea27f98d62.jpg"

function Banner() {
    return (
        <>
            <div class="hero-image" style={{backgroundImage: `url(${IMG})`}}>
                <div class="hero-text">
                    <h1>I am Shivam Sharma</h1>
                    <p>And I'm a Photographer</p>
                    <button>Hire me</button>
                </div>
            </div>
        </>    
    );
}

export default Banner;