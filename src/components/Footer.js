import './Footer.css';

function Footer() {
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
          <div className="subscribe-form">
            <input
              className="subscribe-input"
              type="text"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <button className="subscribe-button">SIGN UP</button>
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
