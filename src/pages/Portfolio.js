import React from 'react';

function Portfolio() {
  return (
    <div>
      <main>
        <div className="intro">
          <div>
            <h1>Gaby Isabelle Photography</h1>
          </div>
          <div className="intro-image-container">
            <img
              className="intro-img"
              src={require('../img/compressed/1.JPG')}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
