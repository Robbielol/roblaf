import Footer from "../../Footer";
import HeaderBar from "../../HeaderBar";
import './Error.css';

const Maintenance = (name) => {

    return(
        <>
            <div className="mtn-text">
                <h1>Oops!! Looks like you got me at a bad time.</h1>
                <h2> This page {name}, is being currently being improved. </h2>
                <p>Please leave you email found in the footer and I will notify you when this page is operational.</p>
            </div>
        </>
    );
}

export default Maintenance;