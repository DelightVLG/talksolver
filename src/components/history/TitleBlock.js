import React from 'react';
import './TitleBlock.css';

function TitleBlock() {
  return (
    <div className="title-block">
      <h1 className="title-block__title">Our Mission</h1>
      <div className="title-block__description">
        <p className="title-block__paragraph">Our project helps to protect public morality,
        since only appeals written with quotes from classic poets are accepted for consideration.
        Therefore, we created this service that will reformulate ordinary speech into a poet's quote..</p>
      </div>
    </div>
  )
}

export default TitleBlock;
