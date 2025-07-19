// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const Services = () => {
//     const [services, setServices] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchServices = async () => {
//         try {
//           const response = await axios.get('/api/services');
//           setServices(response.data);
//         } catch (err) {
//           setError('Failed to load services. Please try again later.');
//           console.error('Error fetching services:', err);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchServices();
//     }, []);
  
//     if (loading) return <div className="page-container loading-message">Loading services...</div>;
//     if (error) return <div className="page-container error-message">{error}</div>;
  
//     return (
//       <div className="page-container services-container">
//         <h2 className="page-title">Our Services & Pricing</h2>
//         <div className="services-grid">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <h3 className="service-name">{service.name}</h3>
//               <p className="service-description">{service.description}</p>
//               <p className="service-price">Price: ${service.price.toFixed(2)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default Services;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
    // State variables for services data, loading status, and error messages
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Define the API URL. Ensure this matches your Spring Boot backend's address and port.
    // UPDATED: Changed port from 8080 to 8082 as requested.
    const API_URL = 'http://localhost:8082/api/services';

    // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        // Log to console when the component starts fetching data
        console.log('Services component mounted. Starting data fetch...');
        fetchServices(); // Call fetchServices immediately when component mounts
    }, []); // Empty dependency array means this effect runs once after the initial render

    const fetchServices = async () => {
        setLoading(true); // Always set loading to true when starting a fetch
        setError(null);   // Clear any previous error

        // Log the exact URL Axios is trying to hit for debugging network issues
        console.log(`Attempting to fetch services from: ${API_URL}`);

        try {
            // Make a GET request to the specified API_URL.
            const response = await axios.get(API_URL);
            
            // Log the raw API response data for debugging
            console.log('API response received:', response.data);
            
            // Update the services state with the fetched data
            setServices(response.data);
        } catch (err) {
            // Log the error for detailed debugging
            console.error('Error fetching services:', err);
            // Check if the error is a network error specifically
            if (axios.isAxiosError(err) && !err.response) {
                setError('Network Error: Could not connect to the server. Please ensure your backend is running at ' + API_URL);
            } else if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(`Server Error: ${err.response.status} - ${err.response.statusText || 'Unknown error'}. Please check your backend logs.`);
            } else {
                // Something else happened while setting up the request
                setError('An unexpected error occurred. Please try again.');
            }
        } finally {
            // Set loading to false regardless of success or failure
            setLoading(false);
            // Log the final loading state
            console.log('Data fetching complete. Loading state:', false);
        }
    };

    // Log the current component state during re-renders (useful for debugging)
    console.log('Current state: loading=', loading, 'error=', error, 'services count=', services.length);

    // Conditional rendering based on loading, error, or data presence
    if (loading) {
        return (
            <div className="page-container loading-message">
                <p>Loading services...</p>
                {/* Optional: Add a simple CSS spinner for better user experience */}
                <div className="spinner"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container error-message">
                <p>{error}</p>
                {/* Button to retry fetching data */}
                <button 
                    onClick={fetchServices} // Call the fetchServices function directly
                    className="retry-button"
                >
                    Retry
                </button>
            </div>
        );
    }

    // If no services are found after loading, display a message
    if (services.length === 0) {
        return (
            <div className="page-container no-services-message">
                <p>No services found at the moment.</p>
                {/* You might want to add a "Create Service" button here if applicable */}
            </div>
        );
    }

    // Render the services grid if data is available
    return (
        <div className="page-container services-container">
            <h2 className="page-title">Our Services & Pricing</h2>
            <div className="services-grid">
                {services.map((service) => (
                    // Use service.id as a unique key for list items. Fallback to service.name if id is missing.
                    <div key={service.id || service.name} className="service-card">
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">{service.description}</p>
                        {/* Safely display price, checking if it exists before formatting */}
                        <p className="service-price">Price: ${service.price ? service.price.toFixed(2) : 'N/A'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
