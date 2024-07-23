import React from "react";
import './CSS/navbar.css'

function Navbar() {
    return (
        <>
            <header className="header">
                <div className="components">
                    <div className="logo">
                        <a className="link_home"><h1><b>EDI</b>FYO</h1></a>
                    </div>
                    <div className="content">
                        <a className="content_item" href="#"><span>Home</span></a>
                        <a className="content_item" href="#"><span>About</span></a>
                        <a className="content_item" href="#"><span>Services</span></a>
                        <a className="content_item" href="#"><span>Learn</span></a>
                        <a className="content_item" href="#"><span>Projects</span></a>
                        <a className="content_item" href="#"><span>Our Team</span></a>
                        <a className="content_item" href="#"><span>Contact Us</span></a>
                    </div>
                </div>
            </header>
        </>    
    );
}

export default Navbar;