import './Services.css'
import { useState, useEffect } from 'react';

const SingleService = ({title, description}) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const mobileView = 768;
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth > mobileView);
        };

        window.addEventListener("resize", handleResize);
        
        // Cleanup the event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div className="service-card">
            <h3 className="service-title">{title}</h3>
            <p className={`service-description ${isExpanded ? "show" : "" }`}>
                { isExpanded ? description : ""}
            </p>
            <button onClick={handleToggle} className='service-display-text'>{ isExpanded ? "...See Less" : "...See More" }</button>
        </div>
    );
}

function Services(){
    let userInterface = 'I specialize in designing and developing user interfaces that are intuitive, visually appealing, and highly functional. I create responsive, smooth experiences that adapt to any device, ensuring optimal usability and engagement for all users.';
    let testingDev = 'I ensure software quality through unit tests, manual testing, Selenium automation, and API endpoint validation. By combining these methods, I identify and resolve issues early, improving reliability and performance for a consistent user experience.';
    let websiteDev = 'I develop dynamic, high-performance websites using modern technologies. I build responsive, scalable, and secure applications that delivering a high standard while ensuring efficient backend communication.';
    let backEndDev = 'I build robust backend systems following best practices. By implementing scalable architectures, optimizing performance, and ensuring security, I create efficient backend solutions for great application functionality';
    let restFulApi = 'I design and develop RESTful APIs, ensuring reliable communication between clients and servers. Using Postman for testing, I validate endpoints for security and performance, creating efficient and scalable solutions.';
    let databaseDev = 'I design, create and manage databases for optimal performance, using SQL and NoSQL solutions to structure data efficiently. I ensure data integrity, scalability, and flawless integration with backend applications.';
    const servicesDescription = [userInterface, websiteDev, backEndDev, restFulApi, databaseDev, testingDev]
    const servicesTitle = ['UI/UX Development', 'Website Development', 'Backend Development', 'API Development', 'Database Development', 'Testing Development'];
    

    return (
        <div className="Section">
            <div className="services-container">
                <h2 className="services-heading">My Services</h2>
                <div className="services-grid">
                    { servicesTitle.map((service, index) => {
                        return (
                            <div key={index} className="service-item">
                                <SingleService title={service} description={servicesDescription[index]} />
                            </div>
                        );
                    }) } 
                </div>
            </div>
        </div>
    );
}

export default Services;