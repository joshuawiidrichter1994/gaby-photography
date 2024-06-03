import React, { useState, useEffect, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';
import Spinner from '../components/Spinner';

const imageList = [
  '/img/final/portfolio/1.jpg',
  '/img/final/portfolio/2.jpg',
  '/img/final/portfolio/3.jpg',
  '/img/final/portfolio/4.jpg',
  '/img/final/portfolio/5.jpg',
  '/img/final/portfolio/6.jpg',
  '/img/final/portfolio/7.jpg',
  '/img/final/portfolio/8.jpg',
  '/img/final/portfolio/9.jpg',
  '/img/final/portfolio/10.jpg',
  '/img/final/portfolio/11.jpg',
  '/img/final/portfolio/12.jpg',
  '/img/final/portfolio/13.jpg',
  '/img/final/portfolio/14.jpg',
  '/img/final/portfolio/15.jpg',
  '/img/final/portfolio/16.jpg',
  '/img/final/portfolio/17.jpg',
  '/img/final/portfolio/18.jpg',
  '/img/final/portfolio/19.jpg',
  '/img/final/portfolio/20.jpg',
  '/img/final/portfolio/21.jpg',
  '/img/final/portfolio/22.jpg',
  '/img/final/portfolio/23.JPG',
  '/img/final/portfolio/24.JPG',
  '/img/final/portfolio/25.JPG',
  '/img/final/portfolio/26.JPG',
  '/img/final/portfolio/27.JPG',
  '/img/final/portfolio/28.JPG',
  '/img/final/portfolio/29.JPG',
  '/img/final/portfolio/30.JPG',
  '/img/final/portfolio/31.JPG',
  '/img/final/portfolio/32.JPG',
  '/img/final/portfolio/33.JPG',
  '/img/final/portfolio/34.JPG',
  '/img/final/portfolio/35.JPG',
  '/img/final/portfolio/36.JPG',
  '/img/final/portfolio/37.JPG',
  '/img/final/portfolio/38.JPG',
];

function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6);
      setLoading(false);
    }, 1000); // Simulate loading delay
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 1.0, // trigger when 100% of the target is visible
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading, loadMoreRef]);

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
            <div ref={loadMoreRef} className="load-more-container">
              {loading && <Spinner />}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
