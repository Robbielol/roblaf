import headerImage from "../Images/technology-background.jpg";
import Navigation from "../Navigation";
import Footer from "../Footer";
import "./Home.css";

const HeaderImage = () => {

    return (
        <>
            <div className="header-container">
                <img src={headerImage} alt="home-header-image" className="home-header-image" />
                <div className="middle-text">
                    <h2>I am...</h2>
                    <p>just an example</p>
                </div>
            </div>
            <div className="body-text">
                <h2>
                    All About Me
                </h2>
                <p>
                    This is all just an example you will need to change me alter but being humble I am a god!!!!
                </p>
            </div>
        </>

    );
}

const HomePage = () => {
    
    return (
        <>
            <HeaderImage />
            <Navigation />
            <Footer />
        </>
    );
}

export default HomePage;