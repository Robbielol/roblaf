import logo from "./Images/rd.png";
import "./Footer.css";
import SocialMediaLinks from "./SocialMedia";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Company Logo */}
                    <div className="footer-logo">
                        <img src={logo} alt="Company Logo" />
                        <h2>Making and maintaining your dream website.</h2>
                    </div>

                    {/* Footer Menu */}
                    <div className="footer-menu">
                        <h3>Get in touch with me</h3>
                        <div className="social-media">
                            <SocialMediaLinks />
                        </div>
                        <p>Email: laffanrobert4@gmail.com</p>
                    </div>

                    {/* Contact Information */}
                    <div className="footer-contact">
                    <h3>Contact Information</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;