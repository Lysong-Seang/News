import React from 'react';
import myImage from '../assets/img/wikley-oh-169hero-news-shutterstock.webp';
import '../Homepage.css'; // Make sure the path to the CSS file is correct
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import NewsComponent from '../Lastest/LastestNews';
import LoginHomepage from './LoginHomepage';

const Homepage = () => {
  return (
    <div>
    <div className="homepage-container">
      <div className="content-container">
        <h1>Discover the Best News Experience</h1>
        <p>Stay Informed with Insight News</p>
        <Link to="/signUp"> <button className="get-started-btn">Get Started</button> </Link>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="image-container">
        <img src={myImage} alt="News" />
      </div>

    </div>
    <NewsComponent />

    </div>
    
  );
};

export default Homepage;