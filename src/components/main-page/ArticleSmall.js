import React from 'react';
import './ArticleSmall.css';

function ArticleSmall ({ backgroundImg }) {

  return (
    <article className="articles-group-item">
      <div className="articles-group-item__img" style={{ backgroundImage: `url(${backgroundImg})` }} />
      <h3 className="articles-group-item__title">Search</h3>
      <p className="articles-group-item__text">Et has minim elitr intellegat. Mea aeterno eleifend
        antiopam ad, nam no suscipit quaerendum.
      </p>
    </article>
  )
}

export default ArticleSmall;
