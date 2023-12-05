import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../assets/img/No-Image-Placeholder.svg.png';

const NewsArticle = ({ article, isAuthenticated }) => {
  return (
    <div className="news-container shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '300px' }}>
      {isAuthenticated ? (
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          <img className="newsImage" src={article.urlToImage || noImage} alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
        </a>
      ) : (
        <Link to="/login">
          <img className="newsImage" src={article.urlToImage || noImage} alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
        </Link>
      )}
      <div className="newDetail">
        <h2>{article.title}</h2>
        <p className="news-description">{article.description}</p>
        {isAuthenticated ? (
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-readMore">
            Read more
          </a>
        ) : (
          <Link to="/login" className="news-readMore">
            Read more
          </Link>
        )}
      </div>
    </div>
  );
};

export default NewsArticle;
