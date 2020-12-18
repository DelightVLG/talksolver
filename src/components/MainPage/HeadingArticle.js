import React from 'react';
import './HeadingArticle.css';
import headingImgPath from '../../images/temporary_img1.jpeg';

function HeadingArticle() {
  return (
    <div className="heading-article">
      <div className="heading-article__content">
        <h2 className="heading-article__title">
          Ad eos saepe lucilius, noster postulant philosophia ea usu, qui dicta sadipscing te.
        </h2>
        <p className="heading-article__paragraph">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
          quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
          suscipit quaerendum.
        </p>
        <button className="heading-article__button">Button</button>
      </div>
      <img className="heading-article__image" src={headingImgPath} alt="temporary"/>
    </div>
  )
}

export default HeadingArticle;
