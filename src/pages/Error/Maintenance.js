import "./Error.css";
import { LuConstruction } from "react-icons/lu";

const Maintenance = ({name}) => {

    return(
        <>
            <div className="mtn-text">
                <h1>Oops!! Looks like you got me at a bad time.</h1>
                <h2> My {name} page is being currently being improved. </h2>
                <LuConstruction size="5em" color='rgb(48, 48, 50)'/>
                <p>Please leave you email found in the footer and I will notify you when this page is operational.</p>
            </div>
        </>
    );
}

export default Maintenance;