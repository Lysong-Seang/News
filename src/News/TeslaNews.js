import React from 'react';
import GenericNews from './GenericNews';

const TeslaNews = () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-05&sortBy=publishedAt&apiKey=326be3c2a0d84144976be9f9647d85ce';
    return <GenericNews url={url} />;
}

export default TeslaNews;