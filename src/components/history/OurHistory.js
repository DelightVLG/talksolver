import React from 'react';
import './OurHistory.css';
import TitleBlock from './TitleBlock.js';
import ArticlesGroup from './ArticlesGroup';
import SectionHistory from './SectionHistory';
import Manifesto from './Manifesto';


function OurHistory() {
  return (
    <div className="history">
      <TitleBlock />
      <ArticlesGroup />
      <SectionHistory />
      <Manifesto />
    </div>
  )
}

export default OurHistory;
