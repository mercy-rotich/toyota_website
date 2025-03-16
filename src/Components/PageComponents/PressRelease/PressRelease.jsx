import React, { useState } from 'react';
import './PressRelease.css';

const PressRelease = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      day: "05",
      month: "Mar",
      year: "2025",
      title: "Toyota Kirloskar Motor Introduces Legender 4X4 in All New Manual Transmission (MT) Grade",
      content: "Bangalore, 05th March 2025: Addressing the growing demand for high-performance, adventurous and stylish SUVs, Toyota Kirloskar Motor (TKM) today introduced the Manual Transmission (MT) variant of the Toyota Legender 4X4. Designed for thrill seeking d..."
    },
    {
      id: 2,
      day: "01",
      month: "Mar",
      year: "2025",
      title: "Toyota Kirloskar Motor Drives 13% Growth in February 2025",
      content: "Bangalore, 01st March 2025: Toyota Kirloskar Motor (TKM) has announced sales of 28,414 units in the month of February 2025 signifying an increase of 13% as compared to the same period last year thus reinforcing a strong market acceptance and custome..."
    },
    {
      id: 3,
      day: "25",
      month: "Feb",
      year: "2025",
      title: "Toyota Launches New Hybrid Electric Vehicle Series",
      content: "Bangalore, 25th February 2025: Toyota Kirloskar Motor (TKM) today announced the launch of its latest hybrid electric vehicle series, aimed at accelerating the adoption of environmentally friendly transportation options across India..."
    },
    {
      id: 4,
      day: "18",
      month: "Feb",
      year: "2025",
      title: "Toyota Opens New Manufacturing Facility in Gujarat",
      content: "Ahmedabad, 18th February 2025: Toyota Kirloskar Motor today inaugurated its new state-of-the-art manufacturing facility in Gujarat. The facility represents an investment of ₹2,000 crore and will create over 1,500 direct jobs in the region..."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleNews = 2; // Number of news items visible at once

  const handlePrevClick = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => (prev < newsData.length - visibleNews ? prev + 1 : prev));
  };

  return (
    <div className="press-release-container">
      <div className="press-release-header">
        <h2>Press Release</h2>
        <p>Check out latest news</p>
      </div>

      <div className="press-release-slider">
        {/* Previous button */}
        <button 
          className={`slider-nav prev ${currentIndex === 0 ? 'disabled' : ''}`} 
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          <span>&#8249;</span>
        </button>

        {/* News items */}
        <div className="news-items-container">
          {newsData.slice(currentIndex, currentIndex + visibleNews).map(news => (
            <div className="news-item" key={news.id}>
              <div className="date-container">
                <div className="day">{news.day}</div>
                <div className="month-year">
                  <div>{news.month}</div>
                  <div>{news.year}</div>
                </div>
              </div>
              <div className="news-content">
                <h3>{news.title}</h3>
                <p>{news.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button 
          className={`slider-nav next ${currentIndex >= newsData.length - visibleNews ? 'disabled' : ''}`} 
          onClick={handleNextClick}
          disabled={currentIndex >= newsData.length - visibleNews}
        >
          <span>&#8250;</span>
        </button>
      </div>

      <div className="view-all">
        <a href="#">VIEW ALL <span>&#8250;</span></a>
      </div>
    </div>
  );
};

export default PressRelease;