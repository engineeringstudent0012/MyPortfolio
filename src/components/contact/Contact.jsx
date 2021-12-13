import {useState} from "react"
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <div className="container">
                    <img src="assets/contact.jpg" alt=""/>
                </div>
            </div>
            <div className="right">
                <h1>So You Have Seen What I Can Do</h1>
                <h2>Now, Let's Talk</h2>
                <form onSubmit={handleSubmit} action="https://formsubmit.co/ashishgautam0012@gmail.com" method="POST">
                    <label >  <h3> Your Name</h3></label>
                    <input type="text" placeholder="Jhon Doe" required/>
                    <label > <h3> Your Email Address</h3></label>
                    <input type="text" placeholder="jhon@doe.com" required/>

                    <label htmlFor="Area of Work"><h3>Select Area Of Work</h3></label>
                    <select name="Area of Work" id="Area of Work">
                        <optgroup label="Web Development">
                            <option value="React">React</option>
                            <option value="Wordpress">WordPress</option>
                        </optgroup>
                        <optgroup label="Machine Learning">
                            <option value="mercedes">Python</option>
                        </optgroup>
                    </select>

                    <textarea placeholder="Project Description"></textarea>
                    <div className='buttons'>
                            <button type="submit">Send</button>
                        <br/>
                            <button type="reset">Reset</button>
                        {message && <span>Thanks, I'll reply ASAP :)</span>}
                        {/*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*/}
                    </div>
                </form>
            <div className='alternative-area'>
                <img style={{backgroundColor: "", padding:'20px', width:'50px', boxShadow: '1px 1px 1px green'}}
                     onClick={() => window.open("https://www.upwork.com/freelancers/~01122b1b25a517e56e")} src="assets/upwork.png" alt=""/>

                <img style={{backgroundColor: "", padding:'10px', width:'50px', boxShadow: '1px 1px 1px blue'}}
                     onClick={() => window.open("www.linkedin.com/in/ashishgautam0\n")} src="assets/LinkedIn.png" alt=""/>

                <img style={{backgroundColor: "", padding:'10px', width:'40px', boxShadow: '1px 1px 1px black'}}
                     onClick={() => window.open("https://github.com/engineeringstudent0012\n")} src="assets/github.png" alt=""/>
            </div>
            </div>
        </div>
    )
}