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
        setDarkMode((prev) => !prev)
    }

    useEffect(() => {
        if(darkMode){
            ChangeColorMode('rgb(48, 48, 50)', 'rgb(218, 218, 218)', '#fff', '#000')
        }else{
            ChangeColorMode('rgb(218, 218, 218)', 'rgb(48, 48, 50)', '#000', '#fff')
        }
    }, [darkMode]);

    const handleDownload = () => {
        const fileUrl = "/Robert-Laffan.docx"; // Replace with your file URL
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Robert-Laffan.docx"; // Set the file name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                        <button onClick={() => {handleDownload()}} className="resume-button">Download Resume</button>
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