import React, {useRef, useState, useEffect} from "react";
import {Outlet, Link} from "react-router-dom";
import logo from "./Data/Images/rob-laf-logo.jpg"
import { FiHome } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import "./Navigation.css";

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
  
    // Toggle the menu when button is clicked
    const toggleMenu = (prop) => {
      setIsMenuOpen(prop);
    };

    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          toggleMenu(false);
        }
      }
  
        document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuRef]);

    return (
      <>
        <nav ref={menuRef} id="navigation-bar" className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          {/* Hamburger icon or button to trigger the pop-out menu for mobile*/}
          <div>
            <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={() => toggleMenu(!isMenuOpen)}>
              &#9776;
            </button>
          </div>
          {/* Pop-out menu container for mobile*/}
          <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="navbar-logo">
              <Link to="/"><img src ={logo} alt='robert-laffan-logo'/></Link>
            </div>
            <div className={`sticky-menu`}>
            </div>
              <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`} onClick={() => toggleMenu(false)}>
                <li><Link to='/' ><FiHome size='1.5em'/><h2>Home</h2></Link></li>
                <li><Link to='/knowledgebase' ><BsPersonWorkspace size='1.5em'/><h2>Knowledgebase</h2></Link></li>
                <li><Link to='/experience' ><MdWorkOutline size='1.5em'/><h2>Experience</h2></Link></li>
                <li><Link to='/contact'><RiContactsLine size='1.5em'/><h2>Contact</h2></Link></li>
              </ul>
          </div>
          {isMenuOpen && <div className="overlay" onClick={() => toggleMenu(!isMenuOpen)}></div>}
        </nav>
        <Outlet />
      </>
    );
  };
  
  export default Navigation;