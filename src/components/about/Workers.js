import React from 'react';
import './Workers.css';
import alexa from '../../images/Alexa.png';
import alexandr from '../../images/Alexandr.png';
import alex from '../../images/Alex.png';
import serg from '../../images/Serg.png';


function Workers() {
  return (
    <div className="workers">
      <ul className="workers__list">
        <li className="workers__card">
          <img className="workers__card-avatar" src={alexa} alt="Александра" />
          <h3 className="workers__card-name">Alexandra</h3>
          <p className="workers__card-description">Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum.
          </p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={alexandr} alt="Александр" />
          <h3 className="workers__card-name">Alexandr</h3>
          <p className="workers__card-description">Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum.
          </p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={alex} alt="Алексей" />
          <h3 className="workers__card-name">Aleksey</h3>
          <p className="workers__card-description">Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum.
          </p>
        </li>

        <li className="workers__card">
          <img className="workers__card-avatar" src={serg} alt="Сергей" />
          <h3 className="workers__card-name">Sergey</h3>
          <p className="workers__card-description">Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum. Et has minim elitr intellegat. Mea aeterno eleifend
            antiopam ad, nam no suscipit quaerendum.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Workers;