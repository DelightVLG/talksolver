import React from 'react';
import './ArticlesGroup.css';
import ArticleSmall from './ArticleSmall';
import tempSVG1 from '../../images/tempSVG1.svg';
import tempSVG2 from '../../images/tempSVG2.svg';
import tempSVG3 from '../../images/tempSVG3.svg';


function ArticlesGroup() {
  return (
    <div className="articles-group">
      <ArticleSmall backgroundImg={tempSVG1}/>
      <ArticleSmall backgroundImg={tempSVG2}/>
      <ArticleSmall backgroundImg={tempSVG3}/>
    </div>
  )
}

export default ArticlesGroup;
