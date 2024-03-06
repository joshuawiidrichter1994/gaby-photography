function Landing() {
  return (
    <div>
      {/* HEADER */}
      <header>
        <div className="icon-container">
          <img className="icon" src={require('../img/logo.jpg')} />
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">BLOG</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">WORKS</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">SERVICES</a>
            </span>
          </div>
          <div className="nav-item">
            <span>
              <a href="https://www.google.com/">ABOUT</a>
            </span>
          </div>
          <a href="https://www.google.com/" target="_blank">
            <div className="nav-button">
              <span>Get a Quote</span>
            </div>
          </a>
        </div>
      </header>
      {/* MAIN */}
      <main>
        <div className="intro">
          <div>
            <h1>Gaby Isabelle Photography</h1>
          </div>
          <div className="intro-image-container">
            <img className="intro-img" src={require('../img/1.JPG')} />
          </div>
        </div>
        {/* PORTFOLIO */}
        <div className="portfolio-section">
          <div className="section-header">
            <span className="section-text-left">Portfolio</span>
            <span className="section-text-right">View Work</span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <img className="section-image" src={require('../img/2.JPG')} />
              <p className="section-image-text">Travel</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/3.jpg')} />
              <p className="section-image-text">Brands</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/4.jpg')} />
              <p className="section-image-text">Portraits</p>
            </div>
          </div>
        </div>
        {/* SERVICES */}
        <div className="services-section">
          <div className="services-header">
            <span className="section-text-left">Services</span>
            <span className="section-text-right">View packages</span>
          </div>
          <div className="services-images">
            <div className="service-image-container">
              <img className="service-image" src={require('../img/5.JPG')} />
            </div>
            <div className="service-image-container">
              <img className="service-image" src={require('../img/6.JPG')} />
            </div>
          </div>
        </div>
        {/* BLOGS */}
        <div className="blog-section">
          <div className="section-header">
            <span className="section-text-left">Blog</span>
            <span className="section-text-right">View Work</span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <img className="section-image" src={require('../img/7.jpg')} />
              <p className="section-image-text">Photographing Pairs</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/8.jpg')} />
              <p className="section-image-text">Learning Light</p>
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/9.JPG')} />
              <p className="section-image-text">Environmental Portraiture</p>
            </div>
          </div>
        </div>
        {/* FOOTER */}
        <div className="footer-top">
          <img className="footer-top-image" src={require('../img/10.JPG')} />
          <div className="footer-top-text-container">
            <span className="footer-top-text">
              Fine art photographer seeking to capture identities, expressions,
              & auras of people.
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
                placeholder="Email address"
              />
            </div>
            <button className="subscribe-button">Sign Up</button>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-item">
              <span className="nav-item-text">WORKS</span>
            </div>
            <div className="footer-nav-item">
              <span className="nav-item-text">SERVICES</span>
            </div>
            <div className="footer-nav-item">
              <span className="nav-item-text">BLOG</span>
            </div>
            <div className="footer-nav-item">
              <span className="nav-item-text">ABOUT</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Landing;
