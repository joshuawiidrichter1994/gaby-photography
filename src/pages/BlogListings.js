import React from 'react';
import './BlogListing.css';

function BlogListings() {
  return (
    <div className="blogs-container">
      <div className="header-container">
        <h1 className="header-text">Blog</h1>
      </div>
      <div className="blog-grid">
        <div className="blog-grid-row">
          <div className="blog-container">
            <img className="blog-img" src="/img/blog/blog-1.jpg" />
            <div className="blog-info">
              <p className="blog-heading">Photographing Pairs</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text" href="./blog">
                read more...
              </a>
            </div>
          </div>
          <div className="blog-container">
            <img className="blog-img" src="/img/home/8.jpg" />
            <div className="blog-info">
              <p className="blog-heading">Learning Light</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text" href="./blog">
                read more...
              </a>
            </div>
          </div>
        </div>
        <div className="blog-grid-row">
          <div className="blog-container">
            <img className="blog-img" src="/img/home/9.JPG" />
            <div className="blog-info">
              <p className="blog-heading">Styling Your Subject</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text" href="./blog">
                read more...
              </a>
            </div>
          </div>
          <div className="blog-container">
            <img className="blog-img" src="/img/works/13.jpg" />
            <div className="blog-info">
              <p className="blog-heading">Environmental portraiture</p>
              <p>
                The Beach is a wonderful place, just wonderful. Lots of sand,
                sun, and saltwater. Sounds like a jol
              </p>
              <a className="read-more-text" href="./blog">
                read more...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogListings;
