import React, { useState, useEffect } from 'react';

import noImage from '../assets/img/No-Image-Placeholder.svg.png'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebaseConfig'

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        fetchData(); // Call fetchData only if the user is authenticated
      } else {
        setIsAuthenticated(false);
        setArticles([]); // Clear articles if the user is not authenticated
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=326be3c2a0d84144976be9f9647d85ce';
    const options = { method: 'GET' };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setArticles(result.articles || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (!isAuthenticated) {
    return <div>Please login to view news</div>;
  }



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="newDetail-container" >
        {
  articles.map((article, index) => (
    <div key={index} className="" >
      <div className="news-container shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '300px' }}>
        <a href= {article.url} target='_blank'> 
        <img className="newsImage" src={  article.urlToImage == null ? noImage : article.urlToImage} alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
        </a>
        <div className="newDetail">
          <h2 className="">{article.title}</h2>
          <p className="news-decription">
            {article.description}
          </p>
          <a href={article.url} target="_blank" className='news-readMore' >
            Read more
          </a>
         
        </div>
      </div>
    </div>
  ))
}



    </div>

  );
};

export default NewsComponent;
