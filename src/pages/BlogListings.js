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
                Tips and techniques for taking stunning photographs of couples
                and pairs.
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
                Here's how I play with natural light in different times of the
                day to enhance moods and aesthetics.
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
                Styling is my favourite part of the shoot - especially the
                planning stage. Here, I break the process down into three easy
                steps.
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
              <p>Insights into different mood boards related to the setting.</p>
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
