import JavaSVG from "../Data/Images/SVGs/Java.svg";
import "../pages/home/Home.css";

const JavaLogo = (({color, size, className}) => {
    return(
        <div className={className} >
            <img src={JavaSVG} alt="Java-Logo" />
        </div>
    );
})

export default JavaLogo;