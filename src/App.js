import './App.css';

function App() {
  return (
    <div classNameName="App">
      <header>
        <div className="icon-container">
          <img className="icon" src={require('./img/logo.jpg')} />
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
        <div>
          <h1>Gaby Isabelle Photography</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
