import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="container">
        <header>
          <div className="header-wrap">
            <img className="header-logo" src={require('./img/logo.png')} />
            <p className="header-text">Art photographer based in Cape Town</p>
          </div>
        </header>
        <div className="body">
          <div className="body-left">
            <img className="img-left" src={require('./img/img-left.jpg')} />

            <div className="img-left-footer">
              <p className="slogan">a feminine space.</p>
              <img className="logo" />
            </div>
          </div>
          <div className="body-right">
            <img className="img-right" src={require('./img/img-right.jpg')} />

            <div className="img-right-footer">
              <p className="quote">
                "When words become unclear, I shall focus with photographs. When
                images become inadequate, I shall be content with silence."
              </p>
              <p className="quote-author">- Ansel Adams</p>
              <a
                href="https://www.instagram.com/gabyisabellee/"
                target="_blank"
                className="view-series-btn-text"
              >
                <button className="view-series-btn">View Series</button>
              </a>
            </div>
          </div>
        </div>

        <footer>
          <a href="mailto:gabyisabelle10@gmail.com">
            <img className="social-media-img" src={require('./img/mail.png')} />
          </a>
          <a
            href="https://www.linkedin.com/in/gaby-isabelle-58405b18b/"
            target="_blank"
          >
            <img
              className="social-media-img"
              src={require('./img/linkedin.png')}
            />
          </a>
          <a href="https://www.instagram.com/gabyisabellee/" target="_blank">
            <img
              className="social-media-img"
              src={require('./img/instagram.png')}
            />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
