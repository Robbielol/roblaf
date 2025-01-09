import HeaderBar from "../HeaderBar"
import Navigation from "../Navigation";
import Footer from "../Footer";
import "./Home.css";
import profilePic from "../Images/temp-profile.png";
import Skills from "../skills.json";
import { 
    DiReact, 
    DiJava, 
    DiJavascript1, 
    DiHtml5, 
    DiCss3, 
    DiPython,
    DiGithubBadge,
    DiNodejsSmall 
} from "react-icons/di";
import { TbSql } from "react-icons/tb";
import CSharp from "../SVGs/CSharp"
import React, { useEffect, useState } from "react";
import { SiDotnet } from "react-icons/si";

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


const SkillSection = () => {
    const iconComponents = {
        DiReact,
        DiJavascript1,
        DiJava,
        DiHtml5,
        DiCss3,
        TbSql,
        SiDotnet,
        DiPython,
        DiGithubBadge,
        DiNodejsSmall,
        CSharp
    };
    return (
        <div className="section-container">
            <div className="skills-container">
            { Skills.map((skill, index) => {
                const IconComponent = iconComponents[skill.Component];
                return (
                    <div key={index} className="skill-box">
                        <h4>{skill.Name}</h4>
                        <KnowledgeBar progress={skill.Value}  IconComponent={IconComponent} color={skill.Color}/>
                    </div>
                );
            }) }
            </div>
        </div>
    );
}

const KnowledgeBar = ({ progress, IconComponent, color }) => {
    return (
        <div className="circular-bar">
            <div className="progress-circle" style={{ '--progress': progress }}>
                <IconComponent color={color} size="100" className="center-image" />
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <>
            <HeaderBar />
            <div className="header-section">
                <HeaderImage />
                <ProfilePic />
            </div>
            <div className="skills-section">
                <p>_______________________________________________________________________________________________________________________</p>
                <h2 className="page-title">My Skills & Knowledge</h2>
                <div> <SkillSection/> </div>
            </div>
            <Navigation />
            <Footer />
        </>
    );
}

export default HomePage;