import React from 'react';
import './MainPage.css';
import HeadingArticle from './HeadingArticle';
import ArticlesGroup from './ArticlesGroup';
import CensorModule from './CensorModule';
import Subscribe from './Subscribe';

function MainPage () {
  return (
    <div className="main-page">
      <HeadingArticle />
      <ArticlesGroup />
      <CensorModule />
    {/* Здесь будет react slider*/}
      <Subscribe />
    </div>
  )
}

export default MainPage;
