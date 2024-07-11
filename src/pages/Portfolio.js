import React, { useState, useEffect, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';
import Spinner from '../components/Spinner';

const imageList = [
  '/img/works/11.07.2024/1.png',
  '/img/works/11.07.2024/2.png',
  '/img/works/11.07.2024/3.png',
  '/img/works/11.07.2024/4.png',
  '/img/works/11.07.2024/5.png',
  '/img/works/11.07.2024/6.png',
  '/img/works/11.07.2024/7.png',
  '/img/works/11.07.2024/8.png',
  '/img/works/11.07.2024/9.png',
  '/img/works/11.07.2024/10.png',
  '/img/works/11.07.2024/11.png',
  '/img/works/11.07.2024/12.png',
  '/img/works/11.07.2024/13.png',
  '/img/works/11.07.2024/14.png',
  '/img/works/11.07.2024/15.png',
  '/img/works/11.07.2024/16.png',
  '/img/works/11.07.2024/17.png',
  '/img/works/11.07.2024/18.png',
  '/img/works/11.07.2024/19.png',
  '/img/works/1.jpg',
  '/img/works/2.jpg',
  '/img/works/3.jpg',
  '/img/works/4.jpg',
  '/img/works/5.jpg',
  '/img/works/6.jpg',
  '/img/works/7.jpg',
  '/img/works/8.jpg',
  '/img/works/9.jpg',
  '/img/works/10.jpg',
  '/img/works/11.jpg',
  '/img/works/13.jpg',
  '/img/works/14.jpg',
  '/img/works/15.jpg',
  '/img/works/16.jpg',
  '/img/works/17.jpg',
  '/img/works/18.jpg',
  '/img/works/19.jpg',
  '/img/works/20.jpg',
  '/img/works/21.jpg',
  '/img/works/22.JPG',
  '/img/works/23.JPG',
  '/img/works/24.JPG',
  '/img/works/26.JPG',
  '/img/works/29.JPG',
  '/img/works/31.JPG',
  '/img/works/32.JPG',
  '/img/works/34.JPG',
  '/img/works/35.JPG',
  '/img/works/37.JPG',
  '/img/works/38.JPG',
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
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
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
