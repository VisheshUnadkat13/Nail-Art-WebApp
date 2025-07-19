import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const [feedbackMessage, setFeedbackMessage] = useState('');
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFeedbackMessage('');
      try {
        const response = await axios.post('/api/contact', formData);
        console.log('Contact form submitted:', response.data);
        setFeedbackMessage('Your message has been sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('Error submitting contact form:', error);
        setFeedbackMessage('Failed to send message. Please try again.');
      }
    };
  
    return (
      <div className="page-container contact-container">
        <h2 className="page-title">Contact Us</h2>
  
        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-card">
            <h3 className="contact-subtitle">Get in Touch</h3>
            <p className="contact-description">
              Have questions or need assistance? Feel free to reach out to us!
            </p>
            <ul className="contact-details-list">
              <li>
                <strong>Email:</strong> <a href="mailto:info@nailartistry.com" className="contact-link">info@nailartistry.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+11234567890" className="contact-link">(123) 456-7890</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Nail Art Lane, Beauty City, NA 12345
              </li>
              <li>
                <strong>Hours:</strong> Mon-Sat: 9 AM - 6 PM, Sunday: Closed
              </li>
            </ul>
          </div>
  
          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="contact-subtitle">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="form-grid contact-form">
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  className="form-input"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary submit-message-btn"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Modal message={feedbackMessage} onClose={() => setFeedbackMessage('')} />
      </div>
    );
  };

  export default ContactUs;