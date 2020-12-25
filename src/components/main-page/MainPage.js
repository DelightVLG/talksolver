import React from 'react';
import './MainPage.css';
import ArticlesGroup from './ArticlesGroup';
import CensorModule from './CensorModule';
import Subscribe from './Subscribe';
import TitleBlock from '../TitleBlock';
import { titleBlockMainData } from '../../data/titleBlockData';


function MainPage () {
  return (
    <div className="main-page">
      <TitleBlock
        title={titleBlockMainData.title}
        textContent={titleBlockMainData.textContent}
        backgroundImg={titleBlockMainData.bgrImage}
        enableBtn={true}/>
      <ArticlesGroup />
      <CensorModule />
    {/* Здесь будет react slider*/}
      <Subscribe />
    </div>
  )
}

export default MainPage;
