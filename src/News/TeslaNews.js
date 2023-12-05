import React, { useState, useEffect } from 'react';
import noImage from '../assets/img/No-Image-Placeholder.svg.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Link } from 'react-router-dom';
import LoginHomepage from '../components/LoginHomepage';
import useFetchData from '../ApiFetch/useFetchData';
import NewsArticle from './NewsArticle';

const TeslaNews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-04&sortBy=publishedAt&language=en&apiKey=326be3c2a0d84144976be9f9647d85ce';

    const { data: articles, isLoading, error } = useFetchData(url);

  
    useEffect(() => {
      // Listen for authentication state changes
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsAuthenticated(!!user);
      });
  
      // Clean up the subscription
      return () => unsubscribe();
    }, []);
  
    if (!isAuthenticated) {
      return (
        <div className="newDetail-container">
          {articles.map((article, index) => (
            <NewsArticle key={index} article={article} isAuthenticated={isAuthenticated} />
          ))}
        </div>
      );
    }
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <>
      <LoginHomepage />
      <div className="newDetail-container">
        {articles.map((article, index) => (
          <NewsArticle key={index} article={article} isAuthenticated={isAuthenticated} />
        ))}
      </div>
    </>
  );
  
  
}
 
export default TeslaNews;