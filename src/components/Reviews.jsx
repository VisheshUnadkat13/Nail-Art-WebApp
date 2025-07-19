

// const Reviews = () => {
//     const [reviews, setReviews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });
//     const [message, setMessage] = useState('');
  
//     useEffect(() => {
//       const fetchReviews = async () => {
//         try {
//           const response = await axios.get('/api/reviews');
//           setReviews(response.data);
//         } catch (err) {
//           setError('Failed to load reviews. Please try again later.');
//           console.error('Error fetching reviews:', err);
//         } finally {
//           setLoading(false);
//         }
//       };
//       fetchReviews();
//     }, []);
  
//     const handleReviewChange = (e) => {
//       const { name, value } = e.target;
//       setNewReview((prev) => ({ ...prev, [name]: value }));
//     };
  
//     const handleReviewSubmit = async (e) => {
//       e.preventDefault();
//       setMessage('');
//       try {
//         const response = await axios.post('/api/reviews', newReview);
//         console.log('Review submitted:', response.data);
//         setReviews((prev) => [...prev, { ...newReview, id: Date.now() }]);
//         setMessage('Your review has been submitted successfully!');
//         setNewReview({ author: '', rating: 5, comment: '' });
//       } catch (err) {
//         console.error('Error submitting review:', err);
//         setMessage('Failed to submit review. Please try again.');
//       }
//     };
  
//     if (loading) return <div className="page-container loading-message">Loading reviews...</div>;
//     if (error) return <div className="page-container error-message">{error}</div>;
  
//     return (
//       <div className="page-container reviews-container">
//         <h2 className="page-title">Customer Reviews</h2>
  
//         <div className="reviews-list-section">
//           {reviews.length === 0 ? (
//             <p className="no-reviews-message">No reviews yet. Be the first to leave one!</p>
//           ) : (
//             <div className="reviews-grid">
//               {reviews.map((review) => (
//                 <div key={review.id} className="review-card">
//                   <p className="review-comment">"{review.comment}"</p>
//                   <div className="review-meta">
//                     <p className="review-author">- {review.author}</p>
//                     <div className="review-rating">
//                       {Array(review.rating).fill().map((_, i) => (
//                         <svg key={i} className="star-icon" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.853 1.416 8.292L12 18.897l-7.415 3.897 1.416-8.292-6.001-5.853 8.332-1.209z"/></svg>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
  
//         <h3 className="section-subtitle">Leave a Review</h3>
//         <form onSubmit={handleReviewSubmit} className="form-grid review-form">
//           <div className="form-group">
//             <label htmlFor="review-author" className="form-label">Your Name</label>
//             <input
//               type="text"
//               id="review-author"
//               name="author"
//               value={newReview.author}
//               onChange={handleReviewChange}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="rating" className="form-label">Rating (1-5)</label>
//             <select
//               id="rating"
//               name="rating"
//               value={newReview.rating}
//               onChange={handleReviewChange}
//               required
//               className="form-input"
//             >
//               {[1, 2, 3, 4, 5].map((num) => (
//                 <option key={num} value={num}>{num}</option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="comment" className="form-label">Your Comment</label>
//             <textarea
//               id="comment"
//               name="comment"
//               value={newReview.comment}
//               onChange={handleReviewChange}
//               rows="4"
//               required
//               className="form-input"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="btn-primary submit-review-btn"
//           >
//             Submit Review
//           </button>
//         </form>
//         <Modal message={message} onClose={() => setMessage('')} />
//       </div>
//     );
//   };

//   export default Reviews;




// const Reviews = () => {
//   // State variables for reviews data, loading status, error messages,
//   // new review form data, and success/error messages for submission.
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });
//   const [message, setMessage] = useState(''); // For success/failure messages after submission

//   // Define the API URL for reviews. Ensure this matches your Spring Boot backend's address and port.
//   const API_URL = 'http://localhost:8082/api/reviews';

//   // useEffect hook to fetch reviews when the component mounts
//   useEffect(() => {
//       console.log('Reviews component mounted. Starting data fetch...');
//       fetchReviews(); // Call the fetch function immediately
//   }, []); // Empty dependency array means this effect runs once after initial render

//   // Function to fetch reviews from the backend
//   const fetchReviews = async () => {
//       setLoading(true); // Set loading to true before fetching
//       setError(null);   // Clear any previous errors

//       console.log(`Attempting to fetch reviews from: ${API_URL}`);
//       try {
//           const response = await axios.get(API_URL);
//           console.log('API response received for reviews:', response.data);
//           setReviews(response.data); // Update state with fetched reviews
//       } catch (err) {
//           console.error('Error fetching reviews:', err);
//           // Provide specific error messages for better debugging
//           if (axios.isAxiosError(err) && !err.response) {
//               setError('Network Error: Could not connect to the server for reviews. Please ensure your backend is running at ' + API_URL);
//           } else if (err.response) {
//               setError(`Server Error: ${err.response.status} - ${err.response.statusText || 'Unknown error'}. Check backend logs for reviews.`);
//           } else {
//               setError('An unexpected error occurred while fetching reviews. Please try again.');
//           }
//       } finally {
//           setLoading(false); // Set loading to false regardless of success or failure
//           console.log('Review data fetching complete. Loading state:', false);
//       }
//   };

//   // Handler for changes in the review form input fields
//   const handleReviewChange = (e) => {
//       const { name, value } = e.target;
//       setNewReview((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handler for submitting a new review
//   const handleReviewSubmit = async (e) => {
//       e.preventDefault(); // Prevent default form submission behavior
//       setMessage('');     // Clear any previous messages

//       console.log(`Attempting to submit review to: ${API_URL} with data:`, newReview);
//       try {
//           // Make a POST request to the API_URL with the new review data
//           const response = await axios.post(API_URL, newReview);
//           console.log('Review submitted successfully:', response.data);
          
//           // Add the newly submitted review to the existing list of reviews.
//           // Using response.data ensures we get the actual ID from the backend if generated.
//           setReviews((prev) => [...prev, response.data]); 
          
//           setMessage('Your review has been submitted successfully!'); // Set success message
//           setNewReview({ author: '', rating: 5, comment: '' }); // Reset the form
//       } catch (err) {
//           console.error('Error submitting review:', err);
//           // Provide specific error messages for submission failures
//           if (axios.isAxiosError(err) && !err.response) {
//               setMessage('Network Error: Could not connect to the server to submit review.');
//           } else if (err.response) {
//               setMessage(`Server Error: ${err.response.status} - ${err.response.data.message || 'Failed to submit review.'}`);
//           } else {
//               setMessage('An unexpected error occurred while submitting review. Please try again.');
//           }
//       }
//   };

//   // Log current state for debugging purposes
//   console.log('Current Reviews state: loading=', loading, 'error=', error, 'reviews count=', reviews.length);

//   // Conditional rendering for loading state
//   if (loading) {
//       return (
//           <div className="page-container loading-message">
//               <p>Loading reviews...</p>
//               <div className="spinner"></div>
//           </div>
//       );
//   }

//   if (error) {
//       return (
//           <div className="page-container error-message">
//               <p>{error}</p>
//               <button onClick={fetchReviews} className="retry-button">Retry</button>
//           </div>
//       );
//   }

//   // Main component rendering
//   return (
//       <div className="page-container reviews-container">
//           <h2 className="page-title">Customer Reviews</h2>

//           <div className="reviews-list-section">
//               {reviews.length === 0 ? (
//                   <p className="no-reviews-message">No reviews yet. Be the first to leave one!</p>
//               ) : (
//                   <div className="reviews-grid">
//                       {reviews.map((review) => (
//                           // Ensure review.id is unique; if not available, use a combination of author and comment
//                           <div key={review.id || `${review.author}-${review.comment}`} className="review-card">
//                               <p className="review-comment">"{review.comment}"</p>
//                               <div className="review-meta">
//                                   <p className="review-author">- {review.author}</p>
//                                   <div className="review-rating">
//                                       {/* Render stars based on rating */}
//                                       {Array(review.rating).fill().map((_, i) => (
//                                           <svg key={i} className="star-icon" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.853 1.416 8.292L12 18.897l-7.415 3.897 1.416-8.292-6.001-5.853 8.332-1.209z"/></svg>
//                                       ))}
//                                   </div>
//                               </div>
//                           </div>
//                       ))}
//                   </div>
//               )}
//           </div>

//           <h3 className="section-subtitle">Leave a Review</h3>
//           <form onSubmit={handleReviewSubmit} className="form-grid review-form">
//               <div className="form-group">
//                   <label htmlFor="review-author" className="form-label">Your Name</label>
//                   <input
//                       type="text"
//                       id="review-author"
//                       name="author"
//                       value={newReview.author}
//                       onChange={handleReviewChange}
//                       required
//                       className="form-input"
//                   />
//               </div>
//               <div className="form-group">
//                   <label htmlFor="rating" className="form-label">Rating (1-5)</label>
//                   <select
//                       id="rating"
//                       name="rating"
//                       value={newReview.rating}
//                       onChange={handleReviewChange}
//                       required
//                       className="form-input"
//                   >
//                       {[1, 2, 3, 4, 5].map((num) => (
//                           <option key={num} value={num}>{num}</option>
//                       ))}
//                   </select>
//               </div>
//               <div className="form-group">
//                   <label htmlFor="comment" className="form-label">Your Comment</label>
//                   <textarea
//                       id="comment"
//                       name="comment"
//                       value={newReview.comment}
//                       onChange={handleReviewChange}
//                       rows="4"
//                       required
//                       className="form-input"
//                   ></textarea>
//               </div>
//               <button
//                   type="submit"
//                   className="btn-primary submit-review-btn"
//               >
//                   Submit Review
//               </button>
//           </form>
//           {/* Modal for displaying success/failure messages */}
//           <Modal message={message} onClose={() => setMessage('')} />
//       </div>
//   );
// };

// export default Reviews;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Modal from "./Modal";

// const Reviews = () => {
//     // State variables for reviews data, loading status, error messages,
//     // new review form data, and success/error messages for submission.
//     const [reviews, setReviews] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });
//     const [message, setMessage] = useState(''); // For success/failure messages after submission

//     // Define the API URL for reviews. Ensure this matches your Spring Boot backend's address and port.
//     const API_URL = 'http://localhost:8082/api/reviews';

//     // useEffect hook to fetch reviews when the component mounts
//     useEffect(() => {
//         console.log('Reviews component mounted. Starting data fetch...');
//         fetchReviews(); // Call the fetch function immediately
//     }, []); // Empty dependency array means this effect runs once after initial render

//     // Function to fetch reviews from the backend
//     const fetchReviews = async () => {
//         setLoading(true); // Set loading to true before fetching
//         setError(null);   // Clear any previous errors

//         console.log(`Attempting to fetch reviews from: ${API_URL}`);
//         try {
//             const response = await axios.get(API_URL);
//             console.log('API response received for reviews (raw data):', response.data);
//             setReviews(response.data); // Update state with fetched reviews
//             // NEW LOG: Log the state immediately after setting it
//             console.log('Reviews state updated after GET:', response.data);
//         } catch (err) {
//             console.error('Error fetching reviews:', err);
//             // Provide specific error messages for better debugging
//             if (axios.isAxiosError(err) && !err.response) {
//                 setError('Network Error: Could not connect to the server for reviews. Please ensure your backend is running at ' + API_URL);
//             } else if (err.response) {
//                 setError(`Server Error: ${err.response.status} - ${err.response.data.message || 'Unknown error'}. Check backend logs for reviews.`);
//             } else {
//                 setError('An unexpected error occurred while fetching reviews. Please try again.');
//             }
//         } finally {
//             setLoading(false); // Set loading to false regardless of success or failure
//             console.log('Review data fetching complete. Loading state:', false);
//         }
//     };

//     // Handler for changes in the review form input fields
//     const handleReviewChange = (e) => {
//         const { name, value } = e.target;
//         setNewReview((prev) => ({ ...prev, [name]: value }));
//     };

//     // Handler for submitting a new review
//     const handleReviewSubmit = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior
//         setMessage('');     // Clear any previous messages

//         console.log(`Attempting to submit review to: ${API_URL} with data:`, newReview);
//         try {
//             // Make a POST request to the API_URL with the new review data
//             const response = await axios.post(API_URL, newReview);
//             console.log('Review submitted successfully:', response.data);
            
//             // Use the actual review object returned by the backend (response.data)
//             // This ensures the correct ID (generated by the backend) is used.
//             setReviews((prev) => [...prev, response.data]); 
            
//             setMessage('Your review has been submitted successfully!'); // Set success message
//             setNewReview({ author: '', rating: 5, comment: '' }); // Reset the form
//         } catch (err) {
//             console.error('Error submitting review:', err);
//             // Provide specific error messages for submission failures
//             if (axios.isAxiosError(err) && !err.response) {
//                 setMessage('Network Error: Could not connect to the server to submit review.');
//             } else if (err.response) {
//                 setMessage(`Server Error: ${err.response.status} - ${err.response.data.message || 'Failed to submit review.'}`);
//             } else {
//                 setMessage('An unexpected error occurred while submitting review. Please try again.');
//             }
//         }
//     };

//     // Log current state for debugging purposes
//     console.log('Current Reviews state: loading=', loading, 'error=', error, 'reviews count=', reviews.length);

//     // Conditional rendering for loading state
//     if (loading) {
//         return (
//             <div className="page-container loading-message">
//                 <p>Loading reviews...</p>
//                 <div className="spinner"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="page-container error-message">
//                 <p>{error}</p>
//                 <button onClick={fetchReviews} className="retry-button">Retry</button>
//             </div>
//         );
//     }

//     // Main component rendering
//     return (
//         <div className="page-container reviews-container">
//             <h2 className="page-title">Customer Reviews</h2>

//             <div className="reviews-list-section">
//                 {reviews.length === 0 ? (
//                     <p className="no-reviews-message">No reviews yet. Be the first to leave one!</p>
//                 ) : (
//                     <div className="reviews-grid">
//                         {reviews.map((review) => (
//                             // Ensure review.id is used as the key.
//                             // The backend should return an 'id' for the saved review.
//                             <div key={review.id} className="review-card">
//                                 <p className="review-comment">"{review.comment}"</p>
//                                 <div className="review-meta">
//                                     <p className="review-author">- {review.author}</p>
//                                     <div className="review-rating">
//                                         {/* Render stars based on rating */}
//                                         {Array(review.rating).fill().map((_, i) => (
//                                             <svg key={i} className="star-icon" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.853 1.416 8.292L12 18.897l-7.415 3.897 1.416-8.292-6.001-5.853 8.332-1.209z"/></svg>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//             <h3 className="section-subtitle">Leave a Review</h3>
//             <form onSubmit={handleReviewSubmit} className="form-grid review-form">
//                 <div className="form-group">
//                     <label htmlFor="review-author" className="form-label">Your Name</label>
//                     <input
//                         type="text"
//                         id="review-author"
//                         name="author"
//                         value={newReview.author}
//                         onChange={handleReviewChange}
//                         required
//                         className="form-input"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="rating" className="form-label">Rating (1-5)</label>
//                     <select
//                         id="rating"
//                         name="rating"
//                         value={newReview.rating}
//                         onChange={handleReviewChange}
//                         required
//                         className="form-input"
//                     >
//                         {[1, 2, 3, 4, 5].map((num) => (
//                             <option key={num} value={num}>{num}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="comment" className="form-label">Your Comment</label>
//                     <textarea
//                         id="comment"
//                         name="comment"
//                         value={newReview.comment}
//                         onChange={handleReviewChange}
//                         rows="4"
//                         required
//                         className="form-input"
//                     ></textarea>
//                 </div>
//                 <button
//                     type="submit"
//                     className="btn-primary submit-review-btn"
//                 >
//                     Submit Review
//                 </button>
//             </form>
//             {/* Modal for displaying success/failure messages */}
//             <Modal message={message} onClose={() => setMessage('')} />
//         </div>
//     );
// };

// export default Reviews;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });
    const [message, setMessage] = useState('');

    const API_URL = 'http://localhost:8082/api/reviews';

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(API_URL);
            console.log('Fetched Reviews:', response.data);

            setReviews(Array.isArray(response.data) ? response.data : []);
        } catch (err) {
            console.error('Error fetching reviews:', err);
            setError(err.response ? `Server Error: ${err.response.status}` : "Network Error: Can't reach backend.");
        } finally {
            setLoading(false);
        }
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post(API_URL, newReview);
            setReviews((prev) => [...prev, response.data]);
            setMessage('Review submitted successfully!');
            setNewReview({ author: '', rating: 5, comment: '' });
        } catch (err) {
            console.error('Submission error:', err);
            setMessage(err.response ? `Server Error: ${err.response.status}` : "Network Error: Can't submit review.");
        }
    };

    console.log('Current Reviews:', reviews);

    return (
        <div className="page-container reviews-container">
            <h2 className="page-title">Customer Reviews</h2>

            <div className="reviews-list-section">
                {loading ? (
                    <p className="loading-message">Loading reviews...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : reviews.length === 0 ? (
                    <p className="no-reviews-message">No reviews yet. Be the first to leave one!</p>
                ) : (
                    <div className="reviews-grid">
                        {reviews.map((review) => (
                            <div key={review.id} className="review-card">
                                <p className="review-comment">"{review.comment}"</p>
                                <div className="review-meta">
                                    <p className="review-author">- {review.author}</p>
                                    <div className="review-rating">
                                        {Array(review.rating).fill().map((_, i) => (
                                            <svg key={i} className="star-icon" viewBox="0 0 24 24">
                                                <path d="M12 .587l3.668 7.568 8.332 1.209-6.001 5.853 1.416 8.292L12 18.897l-7.415 3.897 1.416-8.292-6.001-5.853 8.332-1.209z"/>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <h3 className="section-subtitle">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit} className="form-grid review-form">
                <div className="form-group">
                    <label htmlFor="review-author" className="form-label">Your Name</label>
                    <input
                        type="text"
                        id="review-author"
                        name="author"
                        value={newReview.author}
                        onChange={handleReviewChange}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating" className="form-label">Rating (1-5)</label>
                    <select
                        id="rating"
                        name="rating"
                        value={newReview.rating}
                        onChange={handleReviewChange}
                        required
                        className="form-input"
                    >
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comment" className="form-label">Your Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={newReview.comment}
                        onChange={handleReviewChange}
                        rows="4"
                        required
                        className="form-input"
                    ></textarea>
                </div>
                <button type="submit" className="btn-primary submit-review-btn">Submit Review</button>
            </form>

            <Modal message={message} onClose={() => setMessage('')} />
        </div>
    );
};

export default Reviews;







