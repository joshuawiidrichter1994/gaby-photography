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
              src={require('../img/final/blogs/1.jpg')}
            />
            <div className="blog-info">
              <span>3/11/24</span>
              <p className="blog-heading">Photographing Pairs</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text">read more...</a>
            </div>
          </div>
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/final/blogs/2.jpg')}
            />
            <div className="blog-info">
              <span>3/11/24</span>
              <p className="blog-heading">Learning Light</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text">read more...</a>
            </div>
          </div>
        </div>
        <div className="blog-grid-row">
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/final/blogs/3.JPG')}
            />
            <div className="blog-info">
              <span>3/11/24</span>
              <p className="blog-heading">Styling Your Subject</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text">read more...</a>
            </div>
          </div>
          <div className="blog-container">
            <img
              className="blog-img"
              src={require('../img/final/blogs/4.JPG')}
            />
            <div className="blog-info">
              <span>3/11/24</span>
              <p className="blog-heading">Environmental portraiture</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text">read more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
