import React, { useEffect } from 'react';
import sam from '../assets/img/sammy.jpg'
import sam2 from '../assets/img/SAMMY-12.png'
// https://devicons-react.vercel.app/
import { Html5Original, Css3Original, JavascriptOriginal, 
    ReactOriginal, ReactrouterOriginalWordmark, PhpOriginal,
    WordpressOriginal, GitOriginal, GithubOriginal,
    PhotoshopOriginal, IllustratorPlain, XdOriginal} from 'devicons-react';

const About = () => {
    useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    }, []);

    const addAnimation = () => {
        const scrollerInner = document.querySelectorAll(".scroller__inner");
        scrollerInner.forEach(inner => {
            const scrollerContent = Array.from(inner.children);
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                inner.appendChild(duplicatedItem);
            });
        });
    };
    return(
        <section id="about">
            <h2>About</h2>
            <div className="about-container">
                <div className="about-paragraph">
                    <p>I am a front-end developer based in Toronto, Canada. As a musician turned coder, I find both paths to be delightfully similar. 
                        Much like playing an instrument, coding requires precision, attention to detail, and a continuous quest for improvement.
                        The end goal in both professions is to connect with people and enhance the user experience, which is what I strive to achieve 
                        in my work.
                    </p>
                    <p>In my free time, I like to hang out with my dog or eat the world!</p>
                </div>
                <div id="about-img">
                    <img src={sam2} alt="Headshot of Sammy Mak" aria-label="Headshot of Sammy Mak" role="img"/> 
                </div>
            </div>
            <div className="scroller" data-animated="true">
                <div className="scroller__inner">
                    <Html5Original size="40"  />
                    <Css3Original size="40"  />
                    <JavascriptOriginal size="40"  />
                    <ReactOriginal size="40"  />
                    <ReactrouterOriginalWordmark size="40"  />
                    <PhpOriginal size="40"  />
                    <WordpressOriginal size="40"  />
                    <GitOriginal size="40"  />
                    <GithubOriginal size="40"  />
                    <PhotoshopOriginal size="40"  />
                    <IllustratorPlain size="40"  />
                    <XdOriginal size="40"  />
                </div>
            </div>
        </section>
    )
}

export default About

