import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Email sent successfully');
        // Optionally, reset the form fields after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        console.error('Error sending email:', response.statusText);
        // Handle the error appropriately (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-name-container">
        <div className="contact-form-name-item">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="contact-form-field-name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-form-name-item">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="contact-form-field-name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="contact-form-email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-form-field"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form-phone">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="contact-form-field"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contact-form-message">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="contact-form-field-message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="contact-form-submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
