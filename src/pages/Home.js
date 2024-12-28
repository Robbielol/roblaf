import Navigation from "../Navigation";
import Footer from "../Footer";
import "./Home.css";
import profilePic from "../Images/temp-profile.png"
import { useEffect, useState } from "react";

const HeaderImage = () => {
    const middleTextDisplay = ["A Web Developer", "A Freelance Developer", "A Backend Developer", "Your Personal Developer"];
    const [displayTitleDesc, setDisplayTitleDesc] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    let middleTextSplit = '';

    // Displays the text on the header image on home page]\
    useEffect(() => {
        if(wordIndex < middleTextDisplay.length){
            middleTextSplit = middleTextDisplay[wordIndex].split('')
            if (charIndex < middleTextDisplay[wordIndex].length) {
                const timer = setTimeout(() => {
                    setDisplayTitleDesc((prev) => prev + middleTextSplit[charIndex]);
                    setCharIndex((prevIndex) => prevIndex + 1);
                }, 50);
            
                return () => clearTimeout(timer); // Cleanup timer
            } else {
                // Pause before moving to the next word
                const wordPauseTimer = setTimeout(() => {
                    setDisplayTitleDesc(''); // Clear the text for the next word
                    setCharIndex(0); // Reset char index
                    setWordIndex((prev) => (prev + 1)); // Loop through words
                }, 400);
        
                return () => clearTimeout(wordPauseTimer);
            }
        } else {
            console.log(middleTextDisplay[3]);
            setDisplayTitleDesc(middleTextDisplay[3]);
        }
    }, [charIndex, wordIndex, middleTextSplit, middleTextDisplay]);
    
    return (
        <>
            <div className="header-container">
                <h2>Welcome! My name is <h2 className="text-style">Robert Laffan</h2></h2>
                <div className="middle-text">
                    <div className="static-text">               
                        <h2>I am...</h2>
                    </div>
                    <div className="dynamic-text">
                        <h2>{displayTitleDesc}</h2>
                    </div>
                </div>
                <div className="body-text">
                    <p>
                        I am a software developer with over 3 years of professional experience. I have expertise in many skills and technologies, 
                        you can view these below. I have a creative mind and a strong work ethic, allowing me to design, develop and test efficient, reliable,
                        responsive and engaging applications, delivering the results you dream of. I am also committed to constant and clear communication 
                        and collaboration between myself my co-workers and clients, making sure your project runs smoothly. 
                        I’m eager to support your goals with high-quality work that drives success! Click the button below to get in contact with me 
                        and lets' get to work!
                    </p>
                    
                </div>
                <button className="center-component">
                    Get In Contact Me
                </button>
            </div>
        </>

    );
}

const ProfilePic = () => {

    return(
        <div className="profile-image-container">
            <img src={profilePic} alt="profile-image"/>
        </div>
    );
}

const HomePage = () => {
    
    return (
        <>
            <div className="header-section">
                <HeaderImage />
                <ProfilePic />
            </div>
            <div className="skills-section">
            <p>_______________________________________________________________________________________________________________________</p>
            <h2>My Skills & Knowledge</h2>
            </div>
            <Navigation />
            <Footer />
        </>
    );
}

export default HomePage;