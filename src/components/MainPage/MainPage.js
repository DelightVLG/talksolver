import React from 'react';
import './MainPage.css';
import HeadingArticle from './HeadingArticle';
import ArticlesGroup from './ArticlesGroup';

function MainPage () {
  return (
    <div className="main-page">
      <HeadingArticle />
      <ArticlesGroup />
    </div>
  )
}

export default MainPage;
