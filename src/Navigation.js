import React, {useState} from "react";
import logo from "./Images/rob-laf-logo.jpg"
import "./Navigation.css";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Toggle the menu when button is clicked
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav id="navigation-bar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        {/* Hamburger icon or button to trigger the pop-out menu for mobile*/}
        <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776;
        </button>
         {/* Pop-out menu container for mobile*/}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="navbar-logo">
            <a to="/"><img src ={logo} alt='robert-laffan-logo'/></a>
          </div>
          <div className={`sticky-menu`}>
          </div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    );
  };
  
  export default Navigation;