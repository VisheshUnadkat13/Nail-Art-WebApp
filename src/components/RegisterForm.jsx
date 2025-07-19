

import React, { useState } from 'react';
import axios from 'axios';
import Modal from "./Modal";

// const RegisterForm = ({ setCurrentPage }) => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//     });
//     const [message, setMessage] = useState('');
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setMessage('');
//       try {
//         // Use the actual backend endpoint you provided
//         const response = await axios.post('http://localhost:8082/api/login', formData);
//         console.log('Registration successful:', response.data);
//         setMessage(`Registration successful! Welcome, ${response.data.name || response.data.email}.`);
//         // Optionally, you might want to redirect the user to the home page or a success message page
//         // setCurrentPage('home');
//         setFormData({ name: '', email: '', password: '' }); // Clear form
//       } catch (error) {
//         console.error('Error registering user:', error);
//         if (error.response && error.response.data && error.response.data.message) {
//           setMessage(`Registration failed: ${error.response.data.message}`);
//         } else {
//           setMessage('Registration failed. Please ensure your backend is running and check console for details.');
//         }
//       }
//     };
  
//     return (
//       <div className="page-container auth-container">
//         <h2 className="page-title">Register for an Account</h2>
//         <form onSubmit={handleSubmit} className="form-grid auth-form">
//           <div className="form-group">
//             <label htmlFor="register-name" className="form-label">Your Name</label>
//             <input
//               type="text"
//               id="register-name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="register-email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="register-password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn-primary submit-auth-btn"
//           >
//             Register
//           </button>
//         </form>
//         <Modal message={message} onClose={() => setMessage('')} />
//       </div>
//     );
//   };

//   export default RegisterForm;


// const RegisterForm = ({ onRegistrationSuccess }) => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       password: '',
//     });
//     const [message, setMessage] = useState('');
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       setMessage('');
//       try {
//         // Use the actual backend endpoint you provided
//         const response = await axios.post('http://localhost:8082/api/login', formData);
//         console.log('Registration successful:', response.data);
//         setMessage(`Registration successful! Welcome, ${response.data.name || response.data.email}.`);
        
//         // Call the success callback to update App's state and trigger redirection
//         if (onRegistrationSuccess) {
//           onRegistrationSuccess();
//         }
//         setFormData({ name: '', email: '', password: '' }); // Clear form
//       } catch (error) {
//         console.error('Error registering user:', error);
//         if (error.response && error.response.data && error.response.data.message) {
//           setMessage(`Registration failed: ${error.response.data.message}`);
//         } else if (error.response && error.response.status === 409) { // Conflict for existing user
//           setMessage('Registration failed: User with this email or name already exists.');
//         }
//         else {
//           setMessage('Registration failed. Please ensure your backend is running and check console for details.');
//         }
//       }
//     };
  
//     return (
//       <div className="page-container auth-container">
//         <h2 className="page-title">Register for an Account</h2>
//         <form onSubmit={handleSubmit} className="form-grid auth-form">
//           <div className="form-group">
//             <label htmlFor="register-name" className="form-label">Your Name</label>
//             <input
//               type="text"
//               id="register-name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="register-email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-password" className="form-label">Password</label>
//             <input
//               type="password"
//               id="register-password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn-primary submit-auth-btn"
//           >
//             Register
//           </button>
//         </form>
//         <Modal message={message} onClose={() => setMessage('')} />
//       </div>
//     );
//   };

//   export default RegisterForm;