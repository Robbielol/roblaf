import PythonSVG from "../Images/SVGs/Python.svg";
import "../pages/home/Home.css";

const PythonLogo = (({color, size, className}) => {
    return(
        <div className={className} >
            <img src={PythonSVG} alt="Python-Logo" />
        </div>
    );
})

export default PythonLogo;