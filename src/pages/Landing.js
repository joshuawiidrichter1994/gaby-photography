function Landing() {
  return (
    <div>
      <header>
        <div className="icon-container">
          <img className="icon" src={require('../img/logo.jpg')} />
        </div>
        <div className="nav-container">
          <div className="nav-item">
            <span>BLOG</span>
          </div>
          <div className="nav-item">
            <span>WORKS</span>
          </div>
          <div className="nav-item">
            <span>SERVICES</span>
          </div>
          <div className="nav-item">
            <span>ABOUT</span>
          </div>
          <div className="nav-button">
            <span>Get a Quote</span>
          </div>
        </div>
      </header>
      <main>
        <div className="intro">
          <div>
            <h1>Gaby Isabelle Photography</h1>
          </div>
          <div className="intro-image-container">
            <img className="intro-img" src={require('../img/1.JPG')} />
          </div>
        </div>
        <div className="section">
          <div className="section-header">
            <span className="section-text-left">Portfolio</span>
            <span className="section-text-right">View Work</span>
          </div>
          <div className="section-images-container">
            <div className="section-image-container">
              <img className="section-image" src={require('../img/2.JPG')} />
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/3.jpg')} />
            </div>
            <div className="section-image-container">
              <img className="section-image" src={require('../img/4.jpg')} />
            </div>
          </div>
        </div>
        <div className="blog"></div>
        <footer></footer>
      </main>
    </div>
  );
}

export default Landing;
