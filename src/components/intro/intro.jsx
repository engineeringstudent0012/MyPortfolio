import "./intro.scss"
import {init} from "ityped"
import {useEffect, useRef} from "react"


export default function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Wordpress", "React", "HTML CSS JavaScript"]
        })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/create.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Let's Build </h1>
                    <h1>Something Amazing Together </h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                    <p>Over the past years, as an On The Job,
                        I’ve worked with Mid-Sized-Companies and Up-and-coming startups to
                        successfully design,code & deploy new websites and reach their full
                        potential.</p>
                    <div>
                        <img style={{backgroundColor: "", padding:'20px', width:'50px', boxShadow: '1px 1px 1px green'}}
                             onClick={() => window.open("https://www.upwork.com/freelancers/~01122b1b25a517e56e")} src="assets/upwork.png" alt=""/>

                        <img style={{backgroundColor: "", padding:'10px', width:'50px', boxShadow: '1px 1px 1px blue'}}
                             onClick={() => window.open("www.linkedin.com/in/ashishgautam0\n")} src="assets/LinkedIn.png" alt=""/>

                        <img style={{backgroundColor: "", padding:'10px', width:'40px', boxShadow: '1px 1px 1px black'}}
                             onClick={() => window.open("https://github.com/engineeringstudent0012\n")} src="assets/github.png" alt=""/>
                    </div>

                </div>

                <a href="#portfolio">
                    <img src="assets/mousedown.png" alt=""/>

                </a>
            </div>
        </div>
    )
}