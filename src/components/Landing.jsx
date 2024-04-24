import React, { useEffect} from 'react';
import { gsap } from 'gsap';
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import email from '../assets/img/email.svg'

const Landing = () => {
    useEffect(() => {
        let s = document.querySelector("#s")
        let a = document.querySelector("#a")
        let m = document.querySelector("#m")
        let m2 = document.querySelector("#m2")
        let y = document.querySelector("#y")
        let m3 = document.querySelector("#m3")
        let a2 = document.querySelector("#a2")
        let k = document.querySelector("#k")
        let welcome = document.querySelector("#welcome")
        let dd = document.querySelector("#dd")
        let portfolio = document.querySelector("#portfolio")

        gsap.set([m2,y], {
            color: "orange"
        })

        gsap.set([welcome, portfolio], {
            opacity: 0,
            x: 500
        })

        let nameAnimation = gsap.timeline({duration: 1, repeat: -1, repeatDelay: 1})
        nameAnimation.to(s,{
            x:-300,
            opacity: 0,
            duration: 0.7
        })
        nameAnimation.to(a,{
            x:-300,
            opacity: 0,
            duration: 0.6
        })
        nameAnimation.to(m,{
            x:-300,
            opacity: 0, 
            duration: 0.5
        })
        nameAnimation.to(m3,{
            x:-500,
            opacity: 0,
            duration: 0.4
        })
        nameAnimation.to(a2,{
            x:-500,
            opacity: 0,
            duration: 0.4
        })
        nameAnimation.to(k,{
            x:-500,
            opacity: 0,
            duration: 0.4
        })

        nameAnimation.to([welcome, portfolio], {
            x: 0,
            opacity: 1
        })
        nameAnimation.to([welcome, portfolio], {
            delay: 1.7,
            x: 500,
            opacity: 0
        })

        nameAnimation.to(s,{
            x:0,
            duration:0.8,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(a,{
            x:0,
            duration:0.7,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(m,{
            x:0,
            duration:0.6,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(m2,{
            x:0,
            duration:0.5,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(y,{
            x:0,
            duration:0.4,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(m3,{
            x:0,
            duration:0.3,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(a2,{
            x:0,
            duration:0.3,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })
        nameAnimation.to(k,{
            x:0,
            duration:0.3,
            ease: "elastic.out(1,0.3)",
            opacity: 1
        })

        return () => nameAnimation.kill();
    })

    return (
        <section id="landing">
            <div id="social-links">
                <a target="_blank" href="https://github.com/Swatche" rel="noopener noreferrer">
                    <img src={github} alt="Github"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/samantha-mak-34bb349a/" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
                <a target="_blank" href="mailto:samantha.mak@hotmail.com" rel="noopener noreferrer">
                    <img src={email} alt="Email" />
                </a></div>
            <div id="landing-intro">
                <p id="welcome">Welcome to</p>
                <div className="landing-name">
                    <p id="s">S</p>
                    <p id="a">A</p>
                    <p id="m">M</p>
                    <p id="m2">M</p>
                    <p id="y">Y</p>
                    <p id="m3">M</p>
                    <p id="a2">A</p>
                    <p id="k">K</p>
                    
                </div>
                <p id="dd">Web Designer <span>&&</span> Developer</p>
                <p id="portfolio">Portfolio</p>
            </div>
        </section>
    )
}

export default Landing;