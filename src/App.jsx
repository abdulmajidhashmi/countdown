import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  });

  // Set your wedding date here (Year, Month-1, Day, Hour, Minute)
  const weddingDate = new Date(2025, 11, 5, 16, 0, 0).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          milliseconds: Math.floor((difference % 1000) / 10)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0
        });
      }
    }, 10);

    return () => clearInterval(interval);
  }, [weddingDate]);

  return (
    <div className="wedding-container">
      <div className="background-overlay"></div>
      
      <div className="content">
        <div className="hearts-decoration">
          <span className="heart">❤</span>
          <span className="heart">❤</span>
          <span className="heart">❤</span>
        </div>

        <h1 className="wedding-title">Our Wedding Day</h1>
        <p className="couple-names">Zahid & Alvina</p>
        <p className="wedding-date">December 5, 2025</p>

        <div className="countdown-wrapper">
          <div className="countdown-box">
            <div className="time-unit">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
          </div>

          <div className="countdown-box">
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">Hours</span>
            </div>
          </div>

          <div className="countdown-box">
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">Minutes</span>
            </div>
          </div>

          <div className="countdown-box">
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>

          <div className="countdown-box milliseconds">
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.milliseconds).padStart(2, '0')}</span>
              <span className="time-label">Milliseconds</span>
            </div>
          </div>
        </div>

        <div className="message">
          <p>We can't wait to celebrate with you!</p>
        </div>

        <div className="rings-decoration">
          <span className="ring">💍</span>
        </div>
      </div>
    </div>
  );
};

export default App;