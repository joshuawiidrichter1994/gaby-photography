import React, { useState, useEffect, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';
import Spinner from '../components/Spinner';

const imageList = [
  '/img/works/july.JPG',
  '/img/works/july-2.jpg',
  '/img/works/july-3.jpg',
  '/img/works/july-4.jpg',
  '/img/works/july-5.jpg',
  '/img/works/july-6.jpg',
  '/img/works/july-7.jpg',
  '/img/works/july-8.jpg',
  '/img/works/july-9.jpg',
  '/img/works/july-10.jpg',
  '/img/works/july-11.jpg',
  '/img/works/july-12.jpg',
  '/img/works/july-13.jpg',
  '/img/works/july-14.jpg',
  '/img/works/july-15.jpg',
  '/img/works/july-16.jpg',
  '/img/works/july-17.jpg',
  '/img/works/july-18.jpg',
  '/img/works/july-19.jpg',
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
  '/img/works/22.jpg',
  '/img/works/23.jpg',
  '/img/works/24.jpg',
  '/img/works/26.jpg',
  '/img/works/29.jpg',
  '/img/works/32.jpg',
  '/img/works/34.jpg',
  '/img/works/35.jpg',
  '/img/works/37.jpg',
  '/img/works/38.jpg',
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
            <span className="sub-header-text">
              Fine art portfolio / luxury hotel photography examples
            </span>
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
