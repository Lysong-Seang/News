import React from 'react';
import GenericNews from './GenericNews';

const WallStreet = () => {
    const url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=326be3c2a0d84144976be9f9647d85ce';
    return <GenericNews url={url} />;
}

export default WallStreet;