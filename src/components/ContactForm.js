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

  const [emailSent, setEmailSent] = useState(null);

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
      const response = await fetch(
        'https://gaby-photography.vercel.app/api/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      console.log('Response status:', response.status); // Log status code

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        // console.log('Email sent successfully:', data);
        setEmailSent(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json(); // Parse JSON response
        console.error('Error sending email:', errorData);
        setEmailSent(false);
      }
    } catch (error) {
      console.error('Network error sending email:', error.message);
      setEmailSent(false);
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
      <div className="contact-form-feedback">
        {emailSent === true && <span className="success">✓ Email Sent</span>}
        {emailSent === false && (
          <span className="error">✗ Error Sending Email</span>
        )}
      </div>
      <button className="contact-form-submit-btn" type="submit">
        Submit
      </button>
      <br />
      <span className="alternate-message">
        * Alternatively, email gaby@isabelle.co.za directly.
      </span>
    </form>
  );
};

export default ContactForm;
