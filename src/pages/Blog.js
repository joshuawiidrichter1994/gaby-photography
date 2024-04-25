import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blogs-container">
      <div className="header-container">
        <h1 className="header-text">Blog</h1>
      </div>
      <div className="blog-grid">
        <div className="blog-grid-row">
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/compressed/1.JPG')}
            />
            <div className="blog-info">
              <span>25 April 2024</span>
              <h2>The Beach</h2>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a>read more...</a>
            </div>
          </div>
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/compressed/1.JPG')}
            />
            <div className="blog-info">
              <span>25 April 2024</span>
              <h2>The Beach</h2>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a>read more...</a>
            </div>
          </div>
        </div>
        <div className="blog-grid-row">
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/compressed/1.JPG')}
            />
            <div className="blog-info">
              <span>25 April 2024</span>
              <h2>The Beach</h2>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a>read more...</a>
            </div>
          </div>
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/compressed/1.JPG')}
            />
            <div className="blog-info">
              <span>25 April 2024</span>
              <h2>The Beach</h2>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a>read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
