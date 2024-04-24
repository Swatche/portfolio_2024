import React, { useEffect } from "react";
import { gsap } from 'gsap';

const Header = () => {
    useEffect(()=>{
        gsap.set("#desktop-nav", {
            opacity: 0
        })
        
        gsap.to("#desktop-nav", {
            opacity: 1,
            // duration: 0.5,
            scrollTrigger: {
                    trigger: "#desktop-nav",
                    // markers: true,
                    start: "600px",
                    end: "800px",
                    toggleActions: "play none none reverse" 
                                //onEnter onLeave onEnterBack onLeaveBack
                    
                }
        })
    })
    return (
        <>
            <header id="desktop-nav" role="banner">
                <div id="logo">
                    <a href="#landing"><h1>SM</h1></a>
                </div>
                <nav role="navigation" aria-label="Desktop Navigation">
                    <ul>
                        <li><a id="projects-link" href="#projects">Projects</a></li>
                        <li><a id="about-link" href="#about">About</a></li>
                        <li><a id="contact-link" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <header id="mobile" role="banner">
                <div id="logo">
                    <a href="#landing"><h1>SM</h1></a>
                </div>
                <nav id="mobile-nav" role="navigation" aria-label="Mobile Navigation">
                    <ul>
                        <li><a id="projects-link" href="#projects">Projects</a></li>
                        <li><a id="about-link" href="#about">About</a></li>
                        <li><a id="contact-link" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
