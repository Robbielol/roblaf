import HeaderBar from "../../HeaderBar"
import Footer from "../../Footer";
import "./Home.css";
import profilePic from "../../Data/Images/RobProfile.png";
import React, { useEffect, useRef, useState } from "react";
import Portfolio from "../portfolio/Portfolio";
import Services from "../../Services";
import ContactButton from "../../Buttons";

// const TypingEffectText = ({textBlock, setDisplayText}) => {
//     const [wordIndex, setWordIndex] = useState(0);
//     const [charIndex, setCharIndex] = useState(0);
//     const middleTextSplit = useRef('');

//     // Displays the text on the header image on home page
//     useEffect(() => {
//         const middleTextDisplay = textBlock;
//         if(wordIndex < middleTextDisplay.length){
//             middleTextSplit.current = middleTextDisplay[wordIndex].split('')
//             //Goes through each character of the word
//             if (charIndex < middleTextDisplay[wordIndex].length) {
//                 const timer = setTimeout(() => {
//                     setDisplayText((prev) => prev + middleTextSplit.current[charIndex]);
//                     setCharIndex((prevIndex) => prevIndex + 1);
//                 }, 50);
            
//                 return () => clearTimeout(timer); // Cleanup timer
//             } else {
//                 // Pause before moving to the next word
//                 const wordPauseTimer = setTimeout(() => {
//                     setDisplayText(''); // Clear the text for the next word
//                     setCharIndex(0); // Reset char index
//                     setWordIndex((prev) => (prev + 1)); // Loop through words
//                 }, 1000);
        
//                 return () => clearTimeout(wordPauseTimer);
//             }
//         } else {
//             setDisplayText(middleTextDisplay[2]);
//         }
//     }, [charIndex, wordIndex, middleTextSplit, setDisplayText, textBlock]);
// }

const HeaderImage = ({setTextFunc, displayText, aboutSectionRef}) => {
    const [displayTitleDesc, setDisplayTitleDesc] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const middleTextSplit = useRef('');
    
    const ShowText = () => {
        setTextFunc(!displayText);
    };

    // Displays the text on the header image on home page
    useEffect(() => {
        const middleTextDisplay = ["A Software Engineer", "A Website Developer", "Your Personal Developer"];
        if(wordIndex < middleTextDisplay.length){
            middleTextSplit.current = middleTextDisplay[wordIndex].split('')
            //Goes through each character of the word
            if (charIndex < middleTextDisplay[wordIndex].length) {
                const timer = setTimeout(() => {
                    setDisplayTitleDesc((prev) => prev + middleTextSplit.current[charIndex]);
                    setCharIndex((prevIndex) => prevIndex + 1);
                }, 50);
            
                return () => clearTimeout(timer); // Cleanup timer
            } else {
                // Pause before moving to the next word
                const wordPauseTimer = setTimeout(() => {
                    setDisplayTitleDesc(''); // Clear the text for the next word
                    setCharIndex(0); // Reset char index
                    setWordIndex((prev) => (prev + 1)); // Loop through words
                }, 1000);
        
                return () => clearTimeout(wordPauseTimer);
            }
        } else {
            setDisplayTitleDesc(middleTextDisplay[2]);
        }
    }, [charIndex, wordIndex, middleTextSplit]);

    const HandleAboutText = () => {
        ShowText();
    };

    useEffect(() => {
        if (displayText) {
            ScrollToSection(aboutSectionRef);
        }
    }, [displayText, aboutSectionRef]);
    
    return (
        <>
            <div className="header-container">
                <h2>Welcome!</h2> 
                <h2>I am <h2 className="text-style">Robert Laffan</h2></h2> 
                <div className="middle-text">
                    <div className="static-text">               
                        <h1>I am...</h1>
                    </div>
                    <div className="dynamic-text">
                        <h1>{displayTitleDesc}</h1>
                    </div>
                </div>
                <div className="mobile-profile-picture">
                    <ProfilePic/>
                </div>
                <div>
                    <p className="services-text text-background">
                        Need a high-performing website or app?<br/>
                        Struggling with outdated designs, slow performance, or missing features?<br/>
                        Looking to bring a adept software engineer into your team? <br/>
                        I specialize in building custom websites and applications that are fast, modern, and tailored to your business needs.<br/>
                        <br/>                   
                        New Website or Application – Designed from scratch for maximum impact.<br/>
                        Enhancements & Fixes – Add, edit, or optimize content and features.<br/>
                        Speed & Performance – Improve loading times and user experience.<br/>
                        <br/>
                        Let's bring your vision to life! Click the button to get in contact  with me today.
                    </p>
                </div>
                <div>
                    <button onClick={HandleAboutText} className="center-component">
                        More About Me
                    </button>
                    <ContactButton />
                </div>
            </div>
        </>

    );
}

const ScrollToSection = (sectionRef) => {  
    if (!sectionRef.current) return;

    const headerBarHeight = document.querySelector('.topbar-container').offsetHeight; // Get navbar height
    const sectionPosition = sectionRef.current.getBoundingClientRect().top; // Position relative to the viewport
    const offsetPosition = window.scrollY + sectionPosition - headerBarHeight; // Adjust for navbar
    // Manually scroll to section
    window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
    });
};

const ProfilePic = () => {     
    return(
        <div className="profile-image-container">
            <div className="profile-image-wrapper">
                <img src={profilePic} alt="profile-image"/>
            </div>
        </div>
    );
}

const AboutText = ({display}) => {
    const [displayAboutText, setDisplayAboutText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const aboutText = "I am a software engineer with over 3 years of professional experience. I have expertise in many skills and technologies, " +
                "and offer a range of services that can be seen below. I have a creative mind and a strong work ethic, allowing me to design, develop and test efficient " +
                "and engaging applications, delivering the results you dream of. " + 
                "I am also committed to constant and clear communication and collaboration between myself my co-workers and clients, "+ 
                " making sure your project runs smoothly. I’m eager to support your goals with high-quality work that drives success! "+ 
                "Click the button below to get in contact with me and lets' get to work!";
        
    useEffect(() => {
        if (display){
            //Goes through each character of the string
            if (charIndex < aboutText.length) {
                const timer = setTimeout(() => {
                    setDisplayAboutText((prev) => prev + aboutText[charIndex]);
                    setCharIndex((prevIndex) => prevIndex + 1);
                }, 25);
            
                return () => clearTimeout(timer); // Cleanup timer
            }
        } else {
            setDisplayAboutText('');
            setCharIndex(0);
        }
    }, [charIndex, aboutText, display]);

    return (
        <div className="about-text">
            <h2 className="services-heading">More About Me</h2>
            <p className="display-about-text text-background">
                {displayAboutText}
            </p>
            <ContactButton />
        </div>
    );
}



const HomePage = () => {
    const [displayAboutText, setDisplayAboutText] = useState(false);
    const aboutSectionRef = useRef(null);

    return (
        <>
            <HeaderBar />
            <div className="header-background">
                <div className="header-section">
                    <HeaderImage 
                        setTextFunc={setDisplayAboutText} 
                        displayText={displayAboutText}
                        aboutSectionRef={aboutSectionRef}
                    />
                    <div className='desktop-profile-image'>
                        <ProfilePic />
                    </div>
                </div>
                <div ref={aboutSectionRef} className={`body-text ${displayAboutText ? "show" : "" }`}>           
                    <AboutText display={displayAboutText}/>
                </div>
            </div>
            <Services />
            <Portfolio/>
            <Footer />
        </>
    );
}

export default HomePage;