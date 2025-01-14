import React, {useState} from "react";
import logo from "./Images/rob-laf-logo.jpg"
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
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
            <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
              <li href='/Home'><FiHome size='1.5em'/><a>Home</a></li>
              <li href='/Portfolio'><BsPersonWorkspace size='1.5em'/><a>Portfolio</a></li>
              <li href='/Experience'><MdWorkOutline size='1.5em'/><a >Experience</a></li>
              <li href='/Contact'><RiContactsLine size='1.5em'/><a>Contact</a></li>
            </ul>
        </div>
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </nav>
    );
  };
  
  export default Navigation;