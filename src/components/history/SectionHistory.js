import React from 'react';
import './SectionHistory.css';
import nothing from '../../images/nothing.png';


function SectionHistory() {
  return (
      <section className="our-history">
        <h1 className="our-history__title">Наша история</h1>
        <ul className="our-history__list">
          <li className="our-history__list-item">
            <div className="our-history__description">
              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
              suscipit quaerendum.Et has minim elitr intellegat. </p>

              <p className="our-history__paragraph">Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Et has minim
              elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Et has minim elitr
              intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. </p>

              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam
              ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. </p>
              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
              suscipit quaerendum.</p>
            </div>
            <img className="our-history__image" src={nothing} alt="картинка" />
          </li>

          <li className="our-history__list-item">
            <div className="our-history__description">
              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
              suscipit quaerendum.Et has minim elitr intellegat. </p>

              <p className="our-history__paragraph">Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Et has minim
              elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. Et has minim elitr
              intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. </p>

              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam
              ad, nam no suscipit quaerendum.Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. </p>
              <p className="our-history__paragraph">Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no
              suscipit quaerendum.</p>
            </div>
            <img className="our-history__image" src={nothing} alt="картинка" />
          </li>
        </ul>
      </section>
  )
}

export default SectionHistory;
