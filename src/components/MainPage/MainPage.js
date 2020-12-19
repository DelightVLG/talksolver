import React from 'react';
import './MainPage.css';
import HeadingArticle from './HeadingArticle';
import ArticlesGroup from './ArticlesGroup';
import CensorModule from './CensorModule'

function MainPage () {
  return (
    <div className="main-page">
      <HeadingArticle />
      <ArticlesGroup />
      <CensorModule />
    </div>
  )
}

export default MainPage;
