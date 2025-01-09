import SocialMediaLinks from "./SocialMedia";
import "./HeaderBar.css"

const HeaderBar = () => {

    return (
        <>
            <div className="topbar-container">
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