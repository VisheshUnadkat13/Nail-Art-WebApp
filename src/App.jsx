// import React, { useState, useEffect } from 'react';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// import Home from './components/Home.jsx';
// import Booking from './components/Booking.jsx';
// import Services from './components/Services.jsx';
// import Reviews from './components/Reviews.jsx';
// import Gallery from './components/Gallery.jsx';
// import About from './components/About.jsx';
// import ContactUs from './components/ContectUs.jsx';





// // --- Main App Component ---
// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   // Effect to handle hash-based routing for direct links
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.replace('#', '');
//       if (hash) {
//         setCurrentPage(hash);
//       } else {
//         setCurrentPage('home');
//       }
//     };

//     window.addEventListener('hashchange', handleHashChange);
//     handleHashChange(); // Call on initial load

//     return () => {
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, []);

//   // Function to render the current page component
//   const renderPage = () => {
//     switch (currentPage) {
//       case 'booking':
//         return <Booking />;
//       case 'services':
//         return <Services />;
//       case 'reviews':
//         return <Reviews />;
//       case 'gallery':
//         return <Gallery />;
//       case 'about':
//         return <About />;
//       case 'contact':
//         return <ContactUs />;
//       case 'home':
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Embedded CSS */}
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

//         /* Reset and Base Styles */
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         html, body {
//           height: 100%;
//           width: 100%;
//           margin: 0;
//           padding: 0;
//           overflow-x: hidden; /* Prevent horizontal scroll */
//           overflow-y: hidden; 
//         }

//         body {
//           font-family: 'Inter', sans-serif;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//           line-height: 1.6;
//         }

//         .app-container {
//           min-height: 100vh;
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           font-family: 'Inter', sans-serif;
//           // background-image: url("");
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           background-repeat: no-repeat;
//           background-color:#F2B7CB;
//         }

//         /* Mobile-first responsive background */
//         @media (max-width: 768px) {
//           .app-container {
//             background-attachment: scroll; /* Better performance on mobile */
//             background-size: cover;
//           }
//         }

//         /* Utility Classes */
//         .container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }

//         @media (min-width: 640px) {
//           .container {
//             padding: 0 1.5rem;
//           }
//         }

//         .page-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 1rem auto;
//           padding: 1rem;
//           background-color: rgba(255, 255, 255, 0.95);
//           border-radius: 0.5rem;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//         }

//         @media (min-width: 768px) {
//           .page-container {
//             margin: 2rem auto;
//             padding: 1.5rem;
//           }
//         }

//         .page-title {
//           font-size: 1.875rem;
//           font-weight: 700;
//           text-align: center;
//           color:rgb(157, 70, 109);
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 640px) {
//           .page-title {
//             font-size: 2.25rem;
//             margin-bottom: 1.5rem;
//           }
//         }

//         .section-subtitle {
//           font-size: 1.5rem;
//           font-weight: 700;
//           text-align: center;
//           color:rgb(156, 81, 115);
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 640px) {
//           .section-subtitle {
//             font-size: 2rem;
//             margin-bottom: 1.5rem;
//           }
//         }

//         /* Buttons */
//         .btn-primary {
//           display: inline-block;
//           padding: 0.75rem 1.5rem;
//           background-color:rgb(203, 93, 148);
//           color: white;
//           font-size: 1rem;
//           font-weight: 600;
//           border-radius: 9999px;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//           transition: all 0.3s ease-in-out;
//           border: none;
//           cursor: pointer;
//           text-decoration: none;
//           text-align: center;
//         }

//         @media (min-width: 768px) {
//           .btn-primary {
//             padding: 1rem 2rem;
//             font-size: 1.25rem;
//           }
//         }

//         .btn-primary:hover {
//           background-color: #db2777;
//           transform: scale(1.05);
//         }

//         /* Forms */
//         .form-grid {
//           width: 100%;
//           max-width: 48rem;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1rem;
//         }

//         @media (min-width: 768px) {
//           .form-grid {
//             gap: 1.5rem;
//           }
//         }

//         .form-group {
//           width: 100%;
//           margin-bottom: 1rem;
//         }

//         .form-label {
//           display: block;
//           color: #374151;
//           font-size: 1rem;
//           font-weight: 500;
//           margin-bottom: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .form-label {
//             font-size: 1.125rem;
//           }
//         }

//         .form-input {
//           width: 100%;
//           padding: 0.75rem;
//           border: 1px solid #d1d5db;
//           border-radius: 0.375rem;
//           transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//           font-size: 1rem;
//         }

//         .form-input:focus {
//           outline: none;
//           border-color: transparent;
//           box-shadow: 0 0 0 2px rgba(236, 72, 153, 0.75);
//         }

//         .form-checkbox-label {
//           display: inline-flex;
//           align-items: center;
//           width: 100%;
//           padding: 0.5rem;
//           background-color: rgba(249, 250, 251, 0.8);
//           border-radius: 0.375rem;
//           box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
//           transition: background-color 0.15s ease-in-out;
//           cursor: pointer;
//         }

//         @media (min-width: 768px) {
//           .form-checkbox-label {
//             padding: 0.75rem;
//           }
//         }

//         .form-checkbox-label:hover {
//           background-color: rgba(243, 244, 246, 0.8);
//         }

//         .form-checkbox {
//           height: 1.25rem;
//           width: 1.25rem;
//           color: #db2777;
//           border-radius: 0.25rem;
//           border: 1px solid #d1d5db;
//           cursor: pointer;
//           flex-shrink: 0;
//         }

//         .checkbox-text {
//           margin-left: 0.75rem;
//           color: #1f2937;
//           font-size: 0.9rem;
//         }

//         @media (min-width: 768px) {
//           .checkbox-text {
//             font-size: 1rem;
//           }
//         }

//         /* Header */
//         // .header {
//         //   width: 100%;
//         //   background-color: rgba(181, 67, 118, 0.9);
//         //   color: white;
//         //   padding: 1rem 0;
//         //   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//         //   position: sticky;
//         //   top: 0;
//         //   z-index: 40;
//         // }

//         .header {
//           width: 100%;
//           background: linear-gradient(to right, rgba(181, 67, 118, 0.9), rgba(255, 105, 180, 0.9));
//           color: white;
//           padding: 1rem 0;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           position: sticky;
//           top: 0;
//           z-index: 40;
//         }


//         .header-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1rem;
//         }

//         @media (min-width: 768px) {
//           .header-container {
//             flex-direction: row;
//             justify-content: space-between;
//             gap: 0;
//           }
//         }

//         .header-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           border-radius: 0.5rem;
//           padding: 0.5rem;
//           background-color: rgba(193, 87, 113, 0.9);
//         }

//         @media (min-width: 768px) {
//           .header-title {
//             font-size: 1.875rem;
//           }
//         }

//         .header-nav {
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .header-nav {
//             width: auto;
//           }
//         }

//         .header-nav-list {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           gap: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .header-nav-list {
//             gap: 1.5rem;
//           }
//         }

//         .header-nav-button {
//           background: none;
//           border: none;
//           color: white;
//           font-size: 1rem;
//           font-weight: 500;
//           cursor: pointer;
//           transition: color 0.15s ease-in-out;
//           padding: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .header-nav-button {
//             font-size: 1.125rem;
//           }
//         }

//         .header-nav-button:hover {
//           color: #fbcfe8;
//         }

//         /* Footer */
//         // .footer {
//         //   width: 100%;
//         //   background-color: rgba(219, 39, 119, 0.9);
//         //   color: white;
//         //   padding: 1.5rem 0;
//         //   margin-top: auto; /* Push footer to bottom */
//         //   box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
//         // }

//         .footer {
//           width: 100%;
//           background: linear-gradient(to right, rgba(181, 67, 118, 0.9), rgba(255, 105, 180, 0.9));
//           color: white;
//           padding: 1.5rem 0;
//           margin-top: auto; /* Push footer to bottom */
//           box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
//         }


//         .footer-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 1rem;
//           text-align: center;
//         }

//         .footer-copyright {
//           font-size: 1rem;
//           margin-bottom: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .footer-copyright {
//             font-size: 1.125rem;
//           }
//         }

//         .footer-social-links {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 768px) {
//           .footer-social-links {
//             gap: 1.5rem;
//           }
//         }

//         .footer-link {
//           color: white;
//           transition: color 0.15s ease-in-out;
//           text-decoration: none;
//         }

//         .footer-link:hover {
//           color: #fbcfe8;
//         }

//         .footer-contact-info {
//           font-size: 0.9rem;
//         }

//         @media (min-width: 768px) {
//           .footer-contact-info {
//             font-size: 1rem;
//           }
//         }

//         /* Home Page */
//         .home-container {
//           text-align: center;
//           padding: 1rem;
//         }

//         .home-title {
//           font-size: 2rem;
//           font-weight: 800;
//           color: #be185d;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 640px) {
//           .home-title {
//             font-size: 2.5rem;
//           }
//         }

//         @media (min-width: 768px) {
//           .home-title {
//             font-size: 3rem;
//           }
//         }

//         .home-description {
//           font-size: 1rem;
//           color: #4b5563;
//           margin-bottom: 2rem;
//           max-width: 100%;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         @media (min-width: 640px) {
//           .home-description {
//             font-size: 1.125rem;
//             max-width: 48rem;
//           }
//         }

//         @media (min-width: 768px) {
//           .home-description {
//             font-size: 1.25rem;
//           }
//         }

//         .home-button-wrapper {
//           display: flex;
//           justify-content: center;
//         }

//         .home-booking-btn {
//           border-radius: 9999px;
//           padding: 0.75rem 1.5rem;
//           font-size: 1rem;
//           font-weight: 600;
//         }

//         @media (min-width: 768px) {
//           .home-booking-btn {
//             padding: 1rem 2rem;
//             font-size: 1.25rem;
//           }
//         }

//         /* Services Page */
//         .services-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1rem;
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .services-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.5rem;
//           }
//         }

//         .service-card {
//           width: 100%;
//           background-color: rgba(253, 230, 240, 0.8);
//           padding: 1rem;
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border-left: 4px solid #ec4899;
//         }

//         @media (min-width: 768px) {
//           .service-card {
//             padding: 1.5rem;
//           }
//         }

//         .service-name {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #be185d;
//           margin-bottom: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .service-name {
//             font-size: 1.5rem;
//           }
//         }

//         .service-description {
//           color: #1f2937;
//           font-size: 1rem;
//           margin-bottom: 0.75rem;
//         }

//         @media (min-width: 768px) {
//           .service-description {
//             font-size: 1.125rem;
//           }
//         }

//         .service-price {
//           color: #db2777;
//           font-size: 1.125rem;
//           font-weight: 700;
//         }

//         @media (min-width: 768px) {
//           .service-price {
//             font-size: 1.25rem;
//           }
//         }

        


//         /* Booking Page */
//         .booking-form {
//           width: 100%;
//           max-width: 48rem;
//           margin: 0 auto;
//         }

//         .service-checkbox-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 0.5rem;
//           width: 100%;
//         }

//         @media (min-width: 640px) {
//           .service-checkbox-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 0.75rem;
//           }
//         }

//         .submit-booking-btn {
//           width: 100%;
//           padding: 0.75rem;
//           font-size: 1rem;
//           font-weight: 600;
//           border-radius: 0.375rem;
//         }

//         @media (min-width: 768px) {
//           .submit-booking-btn {
//             font-size: 1.25rem;
//           }
//         }

//         /* Reviews Page */
//         .reviews-list-section {
//           margin-bottom: 2rem;
//         }

//         @media (min-width: 768px) {
//           .reviews-list-section {
//             margin-bottom: 2.5rem;
//           }
//         }

//         .no-reviews-message {
//           text-align: center;
//           color: #4b5563;
//           font-size: 1rem;
//         }

//         @media (min-width: 768px) {
//           .no-reviews-message {
//             font-size: 1.125rem;
//           }
//         }

//         .reviews-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1rem;
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .reviews-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 1.5rem;
//           }
//         }

//         .review-card {
//           width: 100%;
//           background-color: rgba(253, 230, 240, 0.8);
//           padding: 1rem;
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border-left: 4px solid #ec4899;
//           //display:none;
//         }

//         @media (min-width: 768px) {
//           .review-card {
//             padding: 1.5rem;
//           }
//         }

//         .review-comment {
//           color: #1f2937;
//           font-size: 1rem;
//           font-style: italic;
//           margin-bottom: 0.5rem;
//         }

//         @media (min-width: 768px) {
//           .review-comment {
//             font-size: 1.125rem;
//           }
//         }

//         .review-meta {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//         }

//         .review-author {
//           color: #be185d;
//           font-weight: 600;
//           font-size: 0.9rem;
//         }

//         @media (min-width: 768px) {
//           .review-author {
//             font-size: 1rem;
//           }
//         }

//         .review-rating {
//           display: flex;
//           color: #f59e0b;
//         }

//         .star-icon {
//           width: 1rem;
//           height: 1rem;
//           fill: currentColor;
//         }

//         @media (min-width: 768px) {
//           .star-icon {
//             width: 1.25rem;
//             height: 1.25rem;
//           }
//         }

//         .review-form {
//           width: 100%;
//           max-width: 48rem;
//           margin: 0 auto;
//         }

//         .submit-review-btn {
//           width: 100%;
//           padding: 0.75rem;
//           font-size: 1rem;
//           font-weight: 600;
//           border-radius: 0.375rem;
//         }

//         @media (min-width: 768px) {
//           .submit-review-btn {
//             font-size: 1.25rem;
//           }
//         }

//         /* Gallery Page */
//         .gallery-description {
//           text-align: center;
//           color: #4b5563;
//           font-size: 1rem;
//           margin-bottom: 1.5rem;
//         }

//         @media (min-width: 768px) {
//           .gallery-description {
//             font-size: 1.125rem;
//             margin-bottom: 2rem;
//           }
//         }

//         .gallery-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1rem;
//           width: 100%;
//         }

//         @media (min-width: 640px) {
//           .gallery-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (min-width: 1024px) {
//           .gallery-grid {
//             grid-template-columns: repeat(3, 1fr);
//             gap: 1.5rem;
//           }
//         }

//         .gallery-card {
//           width: 100%;
//           background-color: rgba(253, 230, 240, 0.8);
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           overflow: hidden;
//           transform: scale(1);
//           transition: transform 0.3s ease-in-out;
//         }

//         .gallery-card:hover {
//           transform: scale(1.02);
//         }

//         @media (min-width: 768px) {
//           .gallery-card:hover {
//             transform: scale(1.05);
//           }
//         }

//         .gallery-image-wrapper {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 0.25rem;
//         }

//         @media (min-width: 640px) {
//           .gallery-image-wrapper {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         .gallery-image {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//           border-radius: 0.5rem;
//         }

//         @media (min-width: 640px) {
//           .gallery-image:first-child {
//             border-top-right-radius: 0;
//             border-bottom-right-radius: 0;
//           }
//           .gallery-image:last-child {
//             border-top-left-radius: 0;
//             border-bottom-left-radius: 0;
//           }
//         }

//         .gallery-card-footer {
//           padding: 0.75rem;
//           text-align: center;
//         }

//         @media (min-width: 768px) {
//           .gallery-card-footer {
//             padding: 1rem;
//           }
//         }

//         .gallery-card-text {
//           color: #1f2937;
//           font-weight: 500;
//           font-size: 0.9rem;
//         }

//         @media (min-width: 768px) {
//           .gallery-card-text {
//             font-size: 1rem;
//           }
//         }

//         /* About Page */
//         .about-content {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 1.5rem;
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .about-content {
//             flex-direction: row;
//             align-items: flex-start;
//             gap: 2rem;
//           }
//         }

//         .about-artist-photo-wrapper {
//           flex-shrink: 0;
//           width: 10rem;
//           height: 10rem;
//         }

//         @media (min-width: 640px) {
//           .about-artist-photo-wrapper {
//             width: 12rem;
//             height: 12rem;
//           }
//         }

//         @media (min-width: 768px) {
//           .about-artist-photo-wrapper {
//             width: 16rem;
//             height: 16rem;
//           }
//         }

//         .about-artist-photo {
//           border-radius: 50%;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
//           border: 4px solid #fbcfe8;
//         }

//         .about-text-content {
//           color: #1f2937;
//           font-size: 1rem;
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .about-text-content {
//             font-size: 1.125rem;
//             flex: 1;
//           }
//         }

//         .about-paragraph {
//           margin-bottom: 1rem;
//         }

//         .about-artist-name {
//           font-weight: 600;
//           color: #be185d;
//         }

//         /* Contact Us Page */
//         .contact-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//           width: 100%;
//         }

//         @media (min-width: 768px) {
//           .contact-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 2rem;
//             margin-bottom: 2.5rem;
//           }
//         }

//         .contact-info-card, .contact-form-card {
//           width: 100%;
//           padding: 1rem;
//           background-color: rgba(253, 230, 240, 0.8);
//           border-radius: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border-left: 4px solid #db2777;
//         }

//         @media (min-width: 768px) {
//           .contact-info-card, .contact-form-card {
//             padding: 1.5rem;
//           }
//         }

//         .contact-subtitle {
//           font-size: 1.5rem;
//           font-weight: 700;
//           color: #9d174d;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 768px) {
//           .contact-subtitle {
//             font-size: 1.875rem;
//           }
//         }

//         .contact-description {
//           color: #1f2937;
//           font-size: 1rem;
//           margin-bottom: 0.75rem;
//         }

//         @media (min-width: 768px) {
//           .contact-description {
//             font-size: 1.125rem;
//           }
//         }

//         .contact-details-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           line-height: 1.5;
//           color: #4b5563;
//           font-size: 1rem;
//         }

//         @media (min-width: 768px) {
//           .contact-details-list {
//             font-size: 1.125rem;
//           }
//         }

//         .contact-link {
//           color: #db2777;
//           text-decoration: none;
//         }

//         .contact-link:hover {
//           text-decoration: underline;
//         }

//         .contact-form {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1rem;
//           width: 100%;
//         }

//         .submit-message-btn {
//           width: 100%;
//           padding: 0.75rem;
//           font-size: 1rem;
//           font-weight: 600;
//           border-radius: 0.375rem;
//         }

//         @media (min-width: 768px) {
//           .submit-message-btn {
//             font-size: 1.25rem;
//           }
//         }

//         /* Modal */
//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           background-color: rgba(0, 0, 0, 0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 50;
//           padding: 1rem;
//         }

//         .modal-content {
//           background-color: white;
//           padding: 1.5rem;
//           border-radius: 0.5rem;
//           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//           max-width: 90%;
//           width: 100%;
//           max-width: 24rem;
//           text-align: center;
//         }

//         .modal-message {
//           font-size: 1rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//         }

//         @media (min-width: 768px) {
//           .modal-message {
//             font-size: 1.125rem;
//           }
//         }

//         .modal-close-btn {
//           padding: 0.625rem 1.5rem;
//           background-color: #ec4899;
//           color: white;
//           border-radius: 0.375rem;
//           transition: background-color 0.15s ease-in-out;
//           border: none;
//           cursor: pointer;
//         }

//         .modal-close-btn:hover {
//           background-color: #db2777;
//         }

//         .modal-close-btn:focus {
//           outline: none;
//           box-shadow: 0 0 0 2px rgba(236, 72, 153, 0.75);
//         }

//         /* Ensure all containers use full width */
//         .form-grid, .services-grid, .reviews-grid, .gallery-grid, 
//         .contact-grid, .booking-form, .review-form {
//           width: 100%;
//           max-width: 100%;
//         }

//         /* Additional responsive utilities */
//         .w-full {
//           width: 100%;
//         }

//         .max-w-full {
//           max-width: 100%;
//         }

//         /* Prevent horizontal overflow */
//         .overflow-x-hidden {
//           overflow-x: hidden;
//         }
//         `}
//       </style>


//       <Header setCurrentPage={setCurrentPage} />
//       <main className="flex-grow p-4">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Booking from './components/Booking.jsx';
import Services from './components/Services.jsx';
import Reviews from './components/Reviews.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import ContactUs from './components/ContectUs.jsx';
// import RegisterForm from './components/RegisterForm.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Effect to handle hash-based routing for direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      console.log('Hash changed to:', hash); // Debugging log
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Call on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to render the current page component
  const renderPage = () => {
    console.log('Current page state (inside renderPage):', currentPage); // Debugging log
    let ComponentToRender;
    switch (currentPage) {
      case 'booking':
        ComponentToRender = <Booking />;
        break;
      case 'services':
        ComponentToRender = <Services />;
        break;
      case 'reviews':
        ComponentToRender = <Reviews />;
        break;
      case 'gallery':
        ComponentToRender = <Gallery />;
        break;
      case 'about':
        ComponentToRender = <About />;
        break;
      case 'contact':
        ComponentToRender = <ContactUs />;
        break;
      case 'registerUser': // New case for the registration form
        ComponentToRender = <RegisterForm setCurrentPage={setCurrentPage} />;
        break;
      case 'home':
      default:
        ComponentToRender = <Home />;
        break;
    }
    console.log('Component being returned by renderPage:', ComponentToRender);
    return ComponentToRender;
  };

  return (
    <div className="app-container">
      {/* Embedded CSS */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* Base Styles */
        html, body {
          height: 100%; /* Ensures HTML and Body take full viewport height */
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .app-container {
          min-height: 100vh; /* Ensures the container takes at least full viewport height */
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
          // background-image: url("https://placehold.co/1920x1080/ffe4e1/000000?text=Nail+Art+Background");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
           background-color:#F2B7CB;

        }

        /* Added for flex-grow on main content area */
        .flex-grow {
            flex-grow: 1;
        }

        /* Utility Classes */
        .container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        .page-container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding: 1.5rem;
          background-color: rgba(255, 255, 255, 0.9); /* bg-white bg-opacity-90 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
          margin-top: 2rem; /* mt-8 */
        }

        .page-title {
          font-size: 2.25rem; /* text-4xl */
          font-weight: 700; /* font-bold */
          text-align: center;
          color: #db2777; /* text-pink-700 */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        .section-subtitle {
          font-size: 2rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          text-align: center;
          color: #db2777; /* text-pink-700 */
          margin-bottom: 1.5rem; /* mb-6 */
        }

        /* Buttons */
        .btn-primary {
          padding: 1rem 2rem; /* px-8 py-4 */
          background-color: #ec4899; /* bg-pink-500 */
          color: white;
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
          border-radius: 9999px; /* rounded-full */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
          transition: all 0.3s ease-in-out; /* transition-all duration-300 */
          border: none;
          cursor: pointer;
        }

        .btn-primary:hover {
          background-color: #db2777; /* hover:bg-pink-600 */
          transform: scale(1.05); /* hover:scale-105 */
        }

        /* Forms */
        .form-grid {
          max-width: 48rem; /* max-w-xl */
          margin-left: auto;
          margin-right: auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem; /* gap-6 */
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-label {
          display: block;
          color: #374151; /* text-gray-700 */
          font-size: 1.125rem; /* text-lg */
          font-weight: 500; /* font-medium */
          margin-bottom: 0.5rem; /* mb-2 */
        }

        .form-input {
          width: 100%;
          padding: 0.75rem; /* p-3 */
          border: 1px solid #d1d5db; /* border border-gray-300 */
          border-radius: 0.375rem; /* rounded-md */
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .form-input:focus {
          outline: none;
          border-color: transparent;
          box-shadow: 0 0 0 2px rgba(236, 72, 153, 0.75); /* focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 */
        }

        .form-checkbox-label {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem; /* p-3 */
          background-color: rgba(249, 250, 251, 0.8); /* bg-gray-50 bg-opacity-80 */
          border-radius: 0.375rem; /* rounded-md */
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
          transition: background-color 0.15s ease-in-out;
          cursor: pointer;
        }

        .form-checkbox-label:hover {
          background-color: rgba(243, 244, 246, 0.8); /* hover:bg-gray-100 */
        }

        .form-checkbox {
          height: 1.25rem; /* h-5 */
          width: 1.25rem; /* w-5 */
          color: #db2777; /* text-pink-600 */
          border-radius: 0.25rem; /* rounded */
          border: 1px solid #d1d5db;
          cursor: pointer;
        }

        .checkbox-text {
          margin-left: 0.75rem; /* ml-3 */
          color: #1f2937; /* text-gray-800 */
          font-size: 1rem; /* text-md */
        }

        /* Header */
        .header {
          background-color: rgba(219, 39, 119, 0.8); /* bg-pink-600 bg-opacity-80 */
          color: white;
          padding: 1rem; /* p-4 */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .header-container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .header-title {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          border-radius: 0.5rem; /* rounded-lg */
          padding: 0.5rem; /* p-2 */
          background-color: rgba(190, 18, 60, 0.9); /* bg-pink-700 bg-opacity-90 */
        }

        .header-nav {
          margin-top: 1rem; /* mt-4 */
        }
        @media (min-width: 768px) { /* md:mt-0 */
          .header-nav {
            margin-top: 0;
          }
        }

        .header-nav-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 1rem; /* space-x-4 */
        }
        @media (min-width: 768px) { /* md:space-x-6 */
          .header-nav-list {
            gap: 1.5rem;
          }
        }

        .header-nav-button {
          background: none;
          border: none;
          color: white;
          font-size: 1.125rem; /* text-lg */
          font-weight: 500; /* font-medium */
          cursor: pointer;
          transition: color 0.15s ease-in-out; /* transition-colors */
          padding: 0.5rem;
        }

        .header-nav-button:hover {
          color: #fbcfe8; /* hover:text-pink-200 */
        }

        /* Footer */
        .footer {
          background-color: rgba(219, 39, 119, 0.8); /* bg-pink-600 bg-opacity-80 */
          color: white;
          padding: 1.5rem; /* p-6 */
          margin-top: 2rem; /* mt-8 */
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06); /* shadow-inner */
        }

        .footer-container {
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .footer-copyright {
          font-size: 1.125rem; /* text-lg */
          margin-bottom: 0.5rem; /* mb-2 */
        }

        .footer-social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem; /* space-x-6 */
          margin-bottom: 1rem; /* mb-4 */
        }

        .footer-link {
          color: white;
          transition: color 0.15s ease-in-out; /* transition-colors */
          text-decoration: none;
        }

        .footer-link:hover {
          color: #fbcfe8; /* hover:text-pink-200 */
        }

        .footer-contact-info {
          font-size: 1rem; /* text-md */
        }

        /* Home Page */
        .home-container {
          text-align: center;
        }

        .home-title {
          font-size: 3rem; /* text-5xl */
          font-weight: 800; /* font-extrabold */
          color: #be185d; /* text-pink-700 */
        }

        .home-description {
          font-size: 1.25rem; /* text-xl */
          color: #4b5563; /* text-gray-700 */
          margin-bottom: 2rem; /* mb-8 */
          max-width: 48rem; /* max-w-3xl */
          margin-left: auto;
          margin-right: auto;
        }

        .home-button-wrapper {
          display: flex;
          justify-content: center;
        }

        .home-booking-btn {
          border-radius: 9999px; /* rounded-full */
          padding: 1rem 2rem; /* px-8 py-4 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
        }

        /* Booking Page */
        .booking-form {
          max-width: 48rem; /* max-w-xl */
        }

        .service-checkbox-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem; /* gap-3 */
        }
        @media (min-width: 640px) { /* sm:grid-cols-2 */
          .service-checkbox-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .submit-booking-btn {
          width: 100%;
          padding-top: 0.75rem; /* py-3 */
          padding-bottom: 0.75rem; /* py-3 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
          border-radius: 0.375rem; /* rounded-md */
        }

        /* Services Page */
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 768px) { /* md:grid-cols-2 */
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .service-card {
          background-color: rgba(253, 230, 240, 0.8); /* bg-pink-50 bg-opacity-80 */
          padding: 1.5rem; /* p-6 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          border-left: 4px solid #ec4899; /* border-l-4 border-pink-500 */
        }

        .service-name {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 600; /* font-semibold */
          color: #be185d; /* text-pink-700 */
          margin-bottom: 0.5rem; /* mb-2 */
        }

        .service-description {
          color: #1f2937; /* text-gray-800 */
          font-size: 1.125rem; /* text-lg */
          margin-bottom: 0.75rem; /* mb-3 */
        }

        .service-price {
          color: #db2777; /* text-pink-600 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 700; /* font-bold */
        }

        /* Reviews Page */
        .reviews-list-section {
          margin-bottom: 2.5rem; /* mb-10 */
        }

        .no-reviews-message {
          text-align: center;
          color: #4b5563; /* text-gray-600 */
          font-size: 1.125rem; /* text-lg */
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 768px) { /* md:grid-cols-2 */
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .review-card {
          background-color: rgba(253, 230, 240, 0.8); /* bg-pink-50 bg-opacity-80 */
          padding: 1.5rem; /* p-6 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          border-left: 4px solid #ec4899; /* border-l-4 border-pink-500 */
        }

        .review-comment {
          color: #1f2937; /* text-gray-800 */
          font-size: 1.125rem; /* text-lg */
          font-style: italic;
          margin-bottom: 0.5rem; /* mb-2 */
        }

        .review-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .review-author {
          color: #be185d; /* text-pink-700 */
          font-weight: 600; /* font-semibold */
        }

        .review-rating {
          display: flex;
          color: #f59e0b; /* text-yellow-500 */
        }

        .star-icon {
          width: 1.25rem; /* w-5 */
          height: 1.25rem; /* h-5 */
          fill: currentColor;
        }

        .review-form {
          max-width: 48rem; /* max-w-xl */
        }

        .submit-review-btn {
          width: 100%;
          padding-top: 0.75rem; /* py-3 */
          padding-bottom: 0.75rem; /* py-3 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
          border-radius: 0.375rem; /* rounded-md */
        }

        /* Gallery Page */
        .gallery-description {
          text-align: center;
          color: #4b5563; /* text-gray-700 */
          font-size: 1.125rem; /* text-lg */
          margin-bottom: 2rem; /* mb-8 */
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 640px) { /* sm:grid-cols-2 */
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) { /* lg:grid-cols-3 */
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gallery-card {
          background-color: rgba(253, 230, 240, 0.8); /* bg-pink-50 bg-opacity-80 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          overflow: hidden;
          transform: scale(1);
          transition: transform 0.3s ease-in-out; /* transform transition-transform */
        }

        .gallery-card:hover {
          transform: scale(1.05); /* hover:scale-105 */
        }

        .gallery-image-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.25rem; /* gap-1 */
        }

        .gallery-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 0.5rem; /* rounded-tl-lg rounded-bl-lg, rounded-tr-lg rounded-br-lg */
        }
        .gallery-image:first-child {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .gallery-image:last-child {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .gallery-card-footer {
          padding: 1rem; /* p-4 */
          text-align: center;
        }

        .gallery-card-text {
          color: #1f2937; /* text-gray-800 */
          font-weight: 500; /* font-medium */
        }

        /* About Page */
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem; /* gap-8 */
        }
        @media (min-width: 768px) { /* md:flex-row md:items-start */
          .about-content {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        .about-artist-photo-wrapper {
          flex-shrink: 0;
          width: 12rem; /* w-48 */
          height: 12rem; /* h-48 */
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) { /* md:w-1/3 md:w-64 md:h-64 */
          .about-artist-photo-wrapper {
            width: 33.333333%;
            width: 16rem;
            height: 16rem;
            margin-left: 0;
            margin-right: 0;
          }
        }

        .about-artist-photo {
          border-radius: 9999px; /* rounded-full */
          width: 100%;
          height: 100%;
          object-fit: cover;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
          border: 4px solid #fbcfe8; /* border-4 border-pink-300 */
        }

        .about-text-content {
          color: #1f2937; /* text-gray-800 */
          font-size: 1.125rem; /* text-lg */
        }
        @media (min-width: 768px) { /* md:w-2/3 */
          .about-text-content {
            width: 66.666667%;
          }
        }

        .about-paragraph {
          margin-bottom: 1rem; /* mb-4 */
        }

        .about-artist-name {
          font-weight: 600; /* font-semibold */
          color: #be185d; /* text-pink-700 */
        }

        /* Contact Us Page */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem; /* gap-8 */
          margin-bottom: 2.5rem; /* mb-10 */
        }
        @media (min-width: 768px) { /* md:grid-cols-2 */
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .contact-info-card, .contact-form-card {
          padding: 1.5rem; /* p-6 */
          background-color: rgba(253, 230, 240, 0.8); /* bg-pink-100 bg-opacity-80 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
          border-left: 4px solid #db2777; /* border-l-4 border-pink-600 */
        }

        .contact-subtitle {
          font-size: 1.875rem; /* text-3xl */
          font-weight: 700; /* font-bold */
          color: #9d174d; /* text-pink-800 */
          margin-bottom: 1rem; /* mb-4 */
        }

        .contact-description {
          color: #1f2937; /* text-gray-800 */
          font-size: 1.125rem; /* text-lg */
          margin-bottom: 0.75rem; /* mb-3 */
        }

        .contact-details-list {
          list-style: none;
          padding: 0;
          margin: 0;
          line-height: 1.5; /* space-y-3 */
          color: #4b5563; /* text-gray-700 */
          font-size: 1.125rem; /* text-lg */
        }

        .contact-link {
          color: #db2777; /* text-pink-600 */
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem; /* gap-4 */
        }

        .submit-message-btn {
          width: 100%;
          padding-top: 0.75rem; /* py-3 */
          padding-bottom: 0.75rem; /* py-3 */
          font-size: 1.25rem; /* text-xl */
          font-weight: 600; /* font-semibold */
          border-radius: 0.375rem; /* rounded-md */
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5); /* bg-black bg-opacity-50 */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          padding: 1rem; /* p-4 */
        }

        .modal-content {
          background-color: white;
          padding: 1.5rem; /* p-6 */
          border-radius: 0.5rem; /* rounded-lg */
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
          max-width: 24rem; /* max-w-sm */
          width: 100%;
          text-align: center;
        }

        .modal-message {
          font-size: 1.125rem; /* text-lg */
          font-weight: 600; /* font-semibold */
          margin-bottom: 1rem; /* mb-4 */
        }

        .modal-close-btn {
          padding: 0.625rem 1.5rem; /* px-6 py-2 */
          background-color: #ec4899; /* bg-pink-500 */
          color: white;
          border-radius: 0.375rem; /* rounded-md */
          transition: background-color 0.15s ease-in-out; /* transition-colors */
          border: none;
          cursor: pointer;
        }

        .modal-close-btn:hover {
          background-color: #db2777; /* hover:bg-pink-600 */
        }
        .modal-close-btn:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(236, 72, 153, 0.75); /* focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 */
        }

        /* Auth Pages (Login/Register) - reused for RegisterForm */
        .auth-container {
          max-width: 50rem; /* max-w-md */
          hight:50rem;
          margin-top: 4rem; /* mt-16 */
          margin-bottom: 4rem; /* mb-16 */
        }

        .auth-form {
          gap: 1rem; /* gap-4 */
        }

        .submit-auth-btn {
          width: 100%;
          padding: 0.75rem 1.5rem; /* py-3 px-6 */
          font-size: 1.125rem; /* text-lg */
          border-radius: 0.375rem; /* rounded-md */
        }

        /* Responsive adjustments for smaller screens */
        @media (max-width: 767px) {
          .header-nav-list {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
          .header-nav {
            width: 100%;
          }
          .header-container {
            flex-direction: column;
          }
          .header-title {
            margin-bottom: 1rem;
          }
          .page-container {
            padding: 1rem;
            margin-top: 1rem;
          }
          .page-title {
            font-size: 1.75rem;
          }
          .home-title {
            font-size: 2.5rem;
          }
          .home-description {
            font-size: 1rem;
          }
          .btn-primary {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
          }
          .form-label {
            font-size: 1rem;
          }
          .form-input {
            padding: 0.5rem;
          }
          .service-checkbox-label {
            padding: 0.5rem;
          }
          .checkbox-text {
            font-size: 0.9rem;
          }
          .service-card {
            padding: 1rem;
          }
          .service-name {
            font-size: 1.25rem;
          }
          .service-description, .service-price {
            font-size: 1rem;
          }
          .review-comment, .review-author, .no-reviews-message {
            font-size: 1rem;
          }
          .gallery-image-wrapper {
            grid-template-columns: 1fr; /* Stack images on small screens */
          }
          .gallery-image:first-child, .gallery-image:last-child {
            border-radius: 0.5rem; /* Apply full rounded corners to stacked images */
          }
          .about-artist-photo-wrapper {
            width: 10rem;
            height: 10rem;
          }
          .about-text-content, .about-paragraph {
            font-size: 1rem;
          }
          .contact-info-card, .contact-form-card {
            padding: 1rem;
          }
          .contact-subtitle {
            font-size: 1.5rem;
          }
          .contact-description, .contact-details-list li, .contact-link {
            font-size: 1rem;
          }
          .auth-container {
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .submit-auth-btn {
            font-size: 1rem;
          }
        }
        `}
      </style>

      <Header
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-grow p-4">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;



