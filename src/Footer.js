import logo from "./Images/rd.png";
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-content">
                {/* Company Logo */}
                <div className="footer-logo">
                <img src={logo} alt="Company Logo" />
                </div>

                {/* Footer Menu */}
                <div className="footer-menu">
                    <h3>Navigate</h3>
                    <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Hours of Operation */}
                <div className="footer-hours">
                    <h3>Hours of Operation</h3>
                    <p>Monday to Sunday: 6 AM - 9 PM</p>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                <h3>Contact Information</h3>
                <p>Email: laffanrobert4@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;