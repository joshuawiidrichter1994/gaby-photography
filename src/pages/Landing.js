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
      </main>
    </div>
  );
}

export default Landing;
