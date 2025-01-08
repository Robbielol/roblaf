import logo from "./Images/rob-laf-logo.jpg";
import "./Footer.css";

const Footer = () => {

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

                    <div className="footer-menu">
                        <h3>Contact Links</h3>
                        <p><a href="https://www.instagram.com/robertlaffan/">Instagram</a></p>
                        <p><a href="https://www.linkedin.com/in/robert-laffan-5a82a9141/">LinkedIn</a></p>
                        <p><a href="laffanrobert4@gmail.com">Email Me</a></p>
                    </div>

                    <div className="footer-menu">
                    <h3>Previous Work</h3>
                    <p><a href="https://github.com/Robbielol/">GitHub</a></p>
                    <p><a href="/portfolio">Portfolio</a></p>
                    </div>

                    <div className="footer-menu">
                    <h3>Get Updates</h3>
                    <form className="sign-up-form">
                        <input 
                        type="email" 
                        placeholder="Sign up to recieve news and updates..."
                        className="email-input" 
                        />
                        <button className="email-button">Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;