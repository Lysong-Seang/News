import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import useFetchData from '../ApiFetch/useFetchData';
import NewsArticle from './NewsArticle';
import LoginHomepage from '../components/LoginHomepage';
import Pagination from './Pagination'

const GenericNews = ({ url }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { data: articles, isLoading, error } = useFetchData(url);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user);
        });
        return () => unsubscribe();
    }, []);

    // Get current articles
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (!isAuthenticated) {
        return (
            <>
            <div className="newDetail-container">
                {currentArticles.map((article, index) => (
                    <NewsArticle key={index} article={article} isAuthenticated={isAuthenticated} />
                ))}
              
            </div>
            <Pagination
                    articlesPerPage={articlesPerPage}
                    totalArticles={articles.length}
                    paginate={paginate}
                />
            </>
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
                {currentArticles.map((article, index) => (
                    <NewsArticle key={index} article={article} isAuthenticated={isAuthenticated} />
                ))}
              
            </div>
            <Pagination
                    articlesPerPage={articlesPerPage}
                    totalArticles={articles.length}
                    paginate={paginate}
                />
        </>
    );
}

export default GenericNews;

