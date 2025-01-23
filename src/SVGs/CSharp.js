import CSharpSVG from "../Images/CSharp.svg";
import "../pages/home/Home.css";

const CSharpLogo = (({color, size, className}) => {
    return(
        <div className={className} >
            <img src={CSharpSVG} alt="C#-Logo" />
        </div>
    );
})

export default CSharpLogo;