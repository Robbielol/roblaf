import { useEffect, useState } from 'react';
import SocialMediaLinks from "./SocialMedia";
import "./HeaderBar.css"

const HeaderBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const ChangeColorMode = (primaryColor, secondaryColor, darkText, lightText) => {
        document.documentElement.style.setProperty('--light-primary', primaryColor);
        document.documentElement.style.setProperty('--dark-primary', secondaryColor);
        document.documentElement.style.setProperty('--dark-text',  darkText);
        document.documentElement.style.setProperty('--light-text', lightText);
        document.documentElement.style.setProperty('--light-footer', secondaryColor);
    }

    const SwitchMode = () => {
        console.log("Check");
        setDarkMode((prev) => !prev)
    }

    useEffect(() => {
        if(darkMode){
            ChangeColorMode('rgb(48, 48, 50)', 'rgb(218, 218, 218)', '#fff', '#000')
        }else{
            ChangeColorMode('rgb(218, 218, 218)', 'rgb(48, 48, 50)', '#000', '#fff')
        }
    }, [darkMode]);

    return (
        <>
            <div className="topbar-container">
                <div className='topbar-mode-section'>
                    <label className='switch'>
                        <input checked={darkMode} 
                            onChange={() => {SwitchMode()}} 
                            type='checkbox'>
                        </input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="topbar-button-section">
                    <div className="topbar-resume-button">
                        <button className="resume-button">Download Resume</button>
                    </div>
                    <div className="topbar-social-media-buttons">
                        <SocialMediaLinks />
                    </div>
                </div>
                
            </div>    
        </>
    );
} 

export default HeaderBar;