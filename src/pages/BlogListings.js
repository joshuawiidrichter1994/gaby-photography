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
            <img className="blog-img" src="/img/blog/1.jpg" />
            <div className="blog-info">
              <p className="blog-heading">Experiencing Mauritius</p>
              <p className="blog-description">
                Join me as I reminisce on my stay at Heritage le Telfair luxury
                resort, exploring the best of the Mauritian coastline.
              </p>
              <a className="read-more-text" href="./blog-travel-mauritius">
                read more...
              </a>
            </div>
          </div>
          <div className="blog-container">
            <img className="blog-img" src="/img/blog/2.png" />
            <div className="blog-info">
              <p className="blog-heading">Learning Light</p>
              <p className="blog-description">
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
            <img className="blog-img" src="/img/blog/8.png" />
            <div className="blog-info">
              <p className="blog-heading">Styling Your Subject</p>
              <p className="blog-description">
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
            <img className="blog-img" src="/img/blog/9.jpg" />
            <div className="blog-info">
              <p className="blog-heading">Environmental Portraiture</p>
              <p className="blog-description">
                Insights into different mood boards related to the setting.
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
