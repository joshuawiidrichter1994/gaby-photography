import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';

const imageList = [
  require('../img/final/portfolio/1.jpg'),
  require('../img/final/portfolio/2.jpg'),
  require('../img/final/portfolio/3.jpg'),
  require('../img/final/portfolio/4.jpg'),
  require('../img/final/portfolio/5.jpg'),
  require('../img/final/portfolio/6.jpg'),
  require('../img/final/portfolio/7.jpg'),
  require('../img/final/portfolio/8.jpg'),
  require('../img/final/portfolio/9.jpg'),
  require('../img/final/portfolio/10.jpg'),
  require('../img/final/portfolio/11.jpg'),
  require('../img/final/portfolio/12.jpg'),
  require('../img/final/portfolio/13.jpg'),
  require('../img/final/portfolio/14.jpg'),
  require('../img/final/portfolio/15.jpg'),
  require('../img/final/portfolio/16.jpg'),
  require('../img/final/portfolio/17.jpg'),
  require('../img/final/portfolio/18.jpg'),
  require('../img/final/portfolio/19.jpg'),
  require('../img/final/portfolio/20.jpg'),
  require('../img/final/portfolio/21.jpg'),
  require('../img/final/portfolio/22.jpg'),
  require('../img/final/portfolio/23.JPG'),
  require('../img/final/portfolio/24.JPG'),
  require('../img/final/portfolio/25.JPG'),
  require('../img/final/portfolio/26.JPG'),
  require('../img/final/portfolio/27.JPG'),
  require('../img/final/portfolio/28.JPG'),
  require('../img/final/portfolio/29.JPG'),
  require('../img/final/portfolio/30.JPG'),
  require('../img/final/portfolio/31.JPG'),
  require('../img/final/portfolio/32.JPG'),
  require('../img/final/portfolio/33.JPG'),
  require('../img/final/portfolio/34.JPG'),
  require('../img/final/portfolio/35.JPG'),
  require('../img/final/portfolio/36.JPG'),
  require('../img/final/portfolio/37.JPG'),
  require('../img/final/portfolio/38.JPG'),
];

function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const createRows = (images) => {
    const rows = [];
    for (let i = 0; i < images.length; i += 2) {
      rows.push(
        <div className="grid-row" key={i}>
          {images.slice(i, i + 2).map((src, index) => (
            <div className="grid-item" key={index}>
              <LazyLoad height={350} offset={100}>
                <img
                  className="grid-item-image"
                  src={src}
                  alt={`Portfolio ${i + index + 1}`}
                />
              </LazyLoad>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <main>
        <div className="portfolio-container">
          <div className="header-container">
            <h1 className="header-text">Works</h1>
          </div>
          <div className="grid-container">
            {createRows(imageList.slice(0, visibleCount))}
          </div>
          {visibleCount < imageList.length && (
            <div className="load-more-container">
              <button onClick={loadMore} className="load-more-button">
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
