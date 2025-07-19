import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal'

// const Booking = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       phone: '',
//       date: '',
//       time: '',
//       service: [],
//     });
//     const [message, setMessage] = useState('');
  
//     const handleInputChange = (e) => {
//       const { name, value, type, checked } = e.target;
//       if (type === 'checkbox') {
//         setFormData((prev) => ({
//           ...prev,
//           service: checked
//             ? [...prev.service, value]
//             : prev.service.filter((s) => s !== value),
//         }));
//       } else {
//         setFormData((prev) => ({ ...prev, [name]: value }));
//       }
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setMessage('');
//       try {
//         const response = await axios.post('/api/bookings', formData);
//         console.log('Booking successful:', response.data);
//         setMessage('Your appointment has been booked successfully!');
//         setFormData({
//           name: '', email: '', phone: '', date: '', time: '', service: [],
//         });
//       } catch (error) {
//         console.error('Error booking appointment:', error);
//         setMessage('Failed to book appointment. Please try again.');
//       }
//     };
  
//     const availableServices = [
//       { id: 'manicure', name: 'Classic Manicure' },
//       { id: 'pedicure', name: 'Gel Pedicure' },
//       { id: 'acrylics', name: 'Acrylic Full Set' },
//       { id: 'nailart', name: 'Custom Nail Art' },
//     ];
  
//     return (
//       <div className="page-container booking-container">
//         <h2 className="page-title">Book Your Slot</h2>
//         <form onSubmit={handleSubmit} className="form-grid booking-form">
//           <div className="form-group">
//             <label htmlFor="name" className="form-label">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone" className="form-label">Phone Number</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="date" className="form-label">Preferred Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="time" className="form-label">Preferred Time</label>
//             <select
//               id="time"
//               name="time"
//               value={formData.time}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             >
//               <option value="">Select a time</option>
//               <option value="09:00">09:00 AM</option>
//               <option value="10:00">10:00 AM</option>
//               <option value="11:00">11:00 AM</option>
//               <option value="13:00">01:00 PM</option>
//               <option value="14:00">02:00 PM</option>
//               <option value="15:00">03:00 PM</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label className="form-label">Select Services</label>
//             <div className="service-checkbox-grid">
//               {availableServices.map((service) => (
//                 <label key={service.id} className="service-checkbox-label">
//                   <input
//                     type="checkbox"
//                     name="service"
//                     value={service.name}
//                     checked={formData.service.includes(service.name)}
//                     onChange={handleInputChange}
//                     className="form-checkbox"
//                   />
//                   <span className="checkbox-text">{service.name}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="btn-primary submit-booking-btn"
//           >
//             Confirm Booking
//           </button>
//         </form>
//         <Modal message={message} onClose={() => setMessage('')} />
//       </div>
//     );
//   };

//   export default Booking;


const Booking = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: [], // Array to hold selected services
    });
    // State to manage messages displayed in the modal (success/failure)
    const [message, setMessage] = useState('');

    // Define the API URL for bookings.
    // IMPORTANT: Ensure this matches your Spring Boot backend's address and port.
    const API_URL = 'http://localhost:8082/api/bookings';

    // Handler for input changes in the form fields
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            // Special handling for checkboxes to add/remove services from the array
            setFormData((prev) => ({
                ...prev,
                service: checked
                    ? [...prev.service, value] // Add service if checked
                    : prev.service.filter((s) => s !== value), // Remove service if unchecked
            }));
        } else {
            // General handling for other input types
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default browser form submission
        setMessage('');     // Clear any previous messages

        // Create a copy of formData to modify the time format for the backend
        const dataToSend = { ...formData };

        // Robustly format the time to HH:mm:ss using Date object
        if (dataToSend.time) {
            const [hours, minutes] = dataToSend.time.split(':');
            const dummyDate = new Date();
            dummyDate.setHours(parseInt(hours, 10));
            dummyDate.setMinutes(parseInt(minutes, 10));
            dummyDate.setSeconds(0); // Explicitly set seconds to 0
            dummyDate.setMilliseconds(0); // Explicitly set milliseconds to 0

            // Get the HH:mm:ss part from the formatted time string
            dataToSend.time = dummyDate.toTimeString().split(' ')[0];
        }

        console.log('Attempting to submit booking with data:', dataToSend);
        console.log(`Sending POST request to: ${API_URL}`);

        try {
            // Make a POST request to the backend API with the formatted data
            const response = await axios.post(API_URL, dataToSend);
            console.log('Booking successful:', response.data);
            setMessage('Your appointment has been booked successfully!'); // Set success message
            
            // Reset the form after successful submission
            // Note: Resetting time to empty string to avoid carrying over the modified format
            setFormData({
                name: '', email: '', phone: '', date: '', time: '', service: [],
            });
        } catch (error) {
            console.error('Error booking appointment:', error);
            // Provide more specific error messages based on the Axios error type
            if (axios.isAxiosError(error) && !error.response) {
                setMessage('Network Error: Could not connect to the server. Please ensure your backend is running at ' + API_URL);
            } else if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setMessage(`Server Error: ${error.response.status} - ${error.response.data.message || 'Failed to book appointment.'}`);
            } else {
                // Something else happened while setting up the request
                setMessage('An unexpected error occurred. Please try again.');
            }
        }
    };

    // List of available services for the checkboxes
    const availableServices = [
        { id: 'manicure', name: 'Classic Manicure' },
        { id: 'pedicure', name: 'Gel Pedicure' },
        { id: 'acrylics', name: 'Acrylic Full Set' },
        { id: 'nailart', name: 'Custom Nail Art' },
    ];

    return (
        <div className="page-container booking-container">
            <h2 className="page-title">Book Your Slot</h2>
            <form onSubmit={handleSubmit} className="form-grid booking-form">
                {/* Full Name Input */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </div>
                {/* Email Input */}
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </div>
                {/* Phone Number Input */}
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </div>
                {/* Preferred Date Input */}
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Preferred Date</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </div>
                {/* Preferred Time Select */}
                <div className="form-group">
                    <label htmlFor="time" className="form-label">Preferred Time</label>
                    <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    >
                        <option value="">Select a time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                    </select>
                </div>
                {/* Select Services Checkboxes */}
                <div className="form-group">
                    <label className="form-label">Select Services</label>
                    <div className="service-checkbox-grid">
                        {availableServices.map((service) => (
                            <label key={service.id} className="service-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="service"
                                    value={service.name}
                                    checked={formData.service.includes(service.name)}
                                    onChange={handleInputChange}
                                    className="form-checkbox"
                                />
                                <span className="checkbox-text">{service.name}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Confirm Booking Button */}
                <button
                    type="submit"
                    className="btn-primary submit-booking-btn"
                >
                    Confirm Booking
                </button>
            </form>
            {/* Modal for displaying success/failure messages */}
            <Modal message={message} onClose={() => setMessage('')} />
        </div>
    );
};

export default Booking;




