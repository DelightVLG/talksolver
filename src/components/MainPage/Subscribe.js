import React from 'react';
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="subscribe">
      <h2 className="subscribe__title">Подпишись на рассылку наших новостей и обновлений </h2>
      <p className="subscribe__subtitle">
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum.
        At nam minimum ponderum. Est audiam animal molestiae te.
      </p>
      <form className="subscribe__form">
        <input type="email" className="subscribe__input" placeholder="example@gmail.com"/>
        <input type="submit" className="subscribe__submit" value="Подписаться"/>
      </form>
      <p className="subscribe__term">
        By clicking “Primary action” you accepting ipsum dolor sit amet, sit ea brute mediocritatem, eu
        sed aliquam scripserit dissentiunt.
      </p>
    </div>
  )
}

export default Subscribe;
