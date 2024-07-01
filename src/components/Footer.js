// /src/components/Footer.js

import './Footer.css';
import { useState } from 'react';
import axios from 'axios';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://gaby-photography.vercel.app/api/add-subscriber',
        { email }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="footer-top">
        <div className="footer-top-text-container">
          <span className="footer-top-text">
            Fine art photographer seeking to capture identities, expressions, &
            auras of people.
          </span>
        </div>
      </div>
      <footer>
        <div className="subscribe-container">
          <div className="subscribe-header">
            <span>Subscribe</span>
          </div>
          <div className="subscribe-text">
            <span>
              Sign up with your email address to receive news and exclusive
              prints
            </span>
          </div>
          <form className="subscribe-form form-inline" onSubmit={handleSubmit}>
            <input
              className="subscribe-input"
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <button className="subscribe-button" type="submit">
              SIGN UP
            </button>
          </form>
          {message && <div className="subscribe-message">{message}</div>}
        </div>
        <div className="footer-nav">
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="./portfolio">WORKS</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="./services">SERVICES</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="./blog-listings">BLOG</a>
            </span>
          </div>
          <div className="footer-nav-item">
            <span className="nav-item-text">
              <a href="./about">ABOUT</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
