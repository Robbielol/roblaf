import axios from 'axios';
import clientList from "../../Data/JSON/clients.json";
import './Portfolio.css'
import { useEffect, useState } from 'react';

const UpdateClientData = async (e) => {
    //e.preventDefault();
    const filePath = "../src/Data/JSON/clients.json";
    //Read through the file
    //Ensure all keys are in the file
    try {
        const updatedPromises = clientList.map(async (client) => {
            if(Object.keys(client).length < 7){
                return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/get-project-data`, { client })
                    .then(response => { console.log("Axios response:", response);
                        return response.data; // return the response object from axios
                    })
                    .catch(error => {
                        console.error("Axios error for client:", client.clientName, error);
                        throw error; // Rethrow the error to handle it properly
                    });
            }
            return client;
        });
        
        const updatedclientList = await Promise.all(updatedPromises);
        clientList = updatedclientList; 
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/write-to-file`, {
            filePath: filePath, 
            data: clientList
        });
        console.log(response.status)
    } catch (error) {
        console.error('Error saving file:', error);
    }
}

const PortfolioGrid = () => {
    const [selectedClientDIndex, setSelectedClientIndex] = useState(null);
    const [clientData, setClientData] = useState({
        displayName: '',
        desciption: '',
        website: '',
        createdDate: '',
        language: ''
    });
    useEffect(() => {
        UpdateClientData();
    }, []);

    const ToggleDetails = (index, client) => {
        setSelectedClientIndex(selectedClientDIndex === index ? null : index);
        setClientData({
             displayName: client.displayName, 
             desciption: client.description, 
             website: client.websiteUrl, 
             createdDate: client.createdDate,
             language: client.language
            });
    }

    return(
        <div className='portfolio-wrapper'>
            <h2 className='portfolio-title'>Portfolio</h2>
            <div className={`portfolio-container ${selectedClientDIndex !== null ? "show" : ""}`}>
                <div className={`brand-container ${selectedClientDIndex !== null ? "show" : ""}`}>
                    { clientList.map((client, index) => {
                        return (
                            <div key={index} className='client-container'>
                                <div className={`small-client-box ${selectedClientDIndex === index ? "show" : ""}`} 
                                    onClick={() => ToggleDetails(index, client)}>
                                    <img src={process.env.PUBLIC_URL + client.logoPath} alt="client-logo"/>
                                </div>
                            </div>
                        );  
                    })}         
                </div>
                <div className={`big-client-box ${selectedClientDIndex !== null ? "show" : ""}`}>
                    <div className={`client-information ${selectedClientDIndex !== null ? "show" : ""}`}>
                        <fieldset className='client-info-box'>
                            <legend className='client-title'>
                                {clientData.displayName}
                            </legend>
                            <p className='client-description'>{clientData.desciption}</p>
                        </fieldset>
                        <div className="client-details">
                            <fieldset className='client-info-box'>
                                <legend>Website</legend>
                                <p><a href={'http://'+clientData.website}>{clientData.website}</a></p>
                            </fieldset>
                            
                            <fieldset className='client-info-box'>
                                <legend>Language</legend>
                                <p>{clientData.language}</p>
                            </fieldset>

                            <fieldset className='client-info-box'>
                                <legend>Date Created</legend>
                                <p>{clientData.createdDate}</p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // Get company logo
    // Get company website
    // Lazy load video of site.
    // 
}



const Portfolio = () => {

    return(
        <>
            <PortfolioGrid />
        </>
    )
}

export default Portfolio;