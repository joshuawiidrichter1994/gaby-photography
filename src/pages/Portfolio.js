import React, { useState, useEffect, useRef } from 'react';
import LazyLoad from 'react-lazyload';
import './Portfolio.css';
import Spinner from '../components/Spinner';

const imageList = [
  'https://gabyisabelle.com/img/works/45.JPG',
  'https://gabyisabelle.com/img/works/46.JPG',
  'https://gabyisabelle.com/img/works/47.JPG',
  'https://gabyisabelle.com/img/works/48.JPG',
  'https://gabyisabelle.com/img/works/49.JPG',
  'https://gabyisabelle.com/img/works/50.JPG',
  'https://gabyisabelle.com/img/works/51.JPG',
  'https://gabyisabelle.com/img/works/52.JPG',
  'https://gabyisabelle.com/img/works/53.JPG',
  'https://gabyisabelle.com/img/works/54.JPG',
  'https://gabyisabelle.com/img/works/55.JPG',
  'https://gabyisabelle.com/img/works/56.JPG',
  'https://gabyisabelle.com/img/works/57.JPG',
  'https://gabyisabelle.com/img/works/58.JPG',
  'https://gabyisabelle.com/img/works/59.JPG',
  'https://gabyisabelle.com/img/works/60.JPG',
  'https://gabyisabelle.com/img/works/61.JPG',
  'https://gabyisabelle.com/img/works/62.JPG',
  'https://gabyisabelle.com/img/works/63.JPG',
  'https://gabyisabelle.com/img/works/1.jpg',
  'https://gabyisabelle.com/img/works/2.jpg',
  'https://gabyisabelle.com/img/works/3.jpg',
  'https://gabyisabelle.com/img/works/4.jpg',
  'https://gabyisabelle.com/img/works/5.jpg',
  'https://gabyisabelle.com/img/works/6.jpg',
  'https://gabyisabelle.com/img/works/7.jpg',
  'https://gabyisabelle.com/img/works/8.jpg',
  'https://gabyisabelle.com/img/works/9.jpg',
  'https://gabyisabelle.com/img/works/10.jpg',
  'https://gabyisabelle.com/img/works/11.jpg',
  'https://gabyisabelle.com/img/works/13.jpg',
  'https://gabyisabelle.com/img/works/14.jpg',
  'https://gabyisabelle.com/img/works/15.jpg',
  'https://gabyisabelle.com/img/works/16.jpg',
  'https://gabyisabelle.com/img/works/17.jpg',
  'https://gabyisabelle.com/img/works/18.jpg',
  'https://gabyisabelle.com/img/works/19.jpg',
  'https://gabyisabelle.com/img/works/20.jpg',
  'https://gabyisabelle.com/img/works/21.jpg',
  'https://gabyisabelle.com/img/works/22.jpg',
  'https://gabyisabelle.com/img/works/23.jpg',
  'https://gabyisabelle.com/img/works/24.jpg',
  'https://gabyisabelle.com/img/works/26.jpg',
  'https://gabyisabelle.com/img/works/29.jpg',
  'https://gabyisabelle.com/img/works/32.jpg',
  'https://gabyisabelle.com/img/works/34.jpg',
  'https://gabyisabelle.com/img/works/35.jpg',
  'https://gabyisabelle.com/img/works/37.jpg',
  'https://gabyisabelle.com/img/works/38.jpg',
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
