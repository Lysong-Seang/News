import React from 'react';
import GenericNews from './GenericNews';

const AppleNews = () => {
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2023-12-04&to=2023-12-04&sortBy=popularity&apiKey=326be3c2a0d84144976be9f9647d85ce';
    return <GenericNews url={url} />;
}

export default AppleNews;