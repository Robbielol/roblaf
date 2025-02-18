import logo from "./Data/Images/rob-laf-logo-trans.png";
import "./Footer.css";
import axios from 'axios';
import { useState } from "react";


const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const HandleEmail = (value) => {
        setStatus('');
        setEmail(value.toLowerCase());
    }

    const ValidateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if the email matches the regex
        if (!emailRegex.test(email)) {
            setStatus("Invalid email format");
            return false;
        }

        return true;
    }

    const RegisterEmail = async (e) => {
        e.preventDefault();
        try{
            if (ValidateEmail()) {
                const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/add-email`, {email})
                if (response.data === "Email added successfully") {
                    setEmail('');
                }

                setStatus(response.data);        
            }
            console.log(status)
        }catch (error) {
            console.error(error);
            setStatus('An error occurred while sending the message.');
        }
    }

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Logo */}
                    <div className="footer-logo">
                        <img src={logo} alt="RobLaf Logo" />
                        <div className="footer-caption">
                            <h2>Making & Maintaining<br/> Your Dream Website.</h2>
                        </div>
                    </div>
                    <div className="footer-mobile-align">
                        <div className="footer-menu">
                            <h3>Contact Links</h3>
                            <p><a href="https://www.linkedin.com/in/robert-laffan-5a82a9141/">LinkedIn</a></p>
                            <p><a href="mainlto:laffanrobert4@gmail.com">Email</a></p>
                        </div>

                        <div className="footer-menu">
                            <h3>Previous Work</h3>
                            <p><a href="https://github.com/Robbielol/">GitHub</a></p>
                            <p><a href="/portfolio">Portfolio</a></p>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <h3>Get Updates</h3>
                        <form onSubmit={RegisterEmail} className="sign-up-form">
                            <input 
                                type="email" 
                                placeholder="Sign up to recieve news and updates..."
                                value={email}
                                onChange={(e) => HandleEmail(e.target.value)}
                                className="email-input" 
                            />
                            <button type="submit"  className="email-button">Sign Up</button>
                        </form>
                        <p className="email-status-text">{status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;