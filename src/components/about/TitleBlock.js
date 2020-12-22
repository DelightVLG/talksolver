import React from 'react';
import './TitleBlock.css';

function TitleBlock() {
  return (
    <div className="title-block">
      <h1 className="title-block__title">About Us</h1>
      <div className="title-block__description">
        <p className="title-block__paragraph">We are four simple humans who love building inspiring products.</p>
        <p className="title-block__paragraph">We started Ludus a few years ago because we were frustrated with
          existing presentation tools, not allowing you to collaborate efficiently, and limiting you from a
          creative point of view. We are proud that what we initially built to solve our own problems is now
          helping thousands of teams all around the world.
        </p>
      </div>
    </div>
  )
}

export default TitleBlock;
