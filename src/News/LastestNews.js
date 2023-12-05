import React from "react";
import GenericNews from "./GenericNews";

const LastestNews = () => {
  const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=326be3c2a0d84144976be9f9647d85ce';
  
  return < GenericNews url={url}/>
}
 
export default LastestNews;