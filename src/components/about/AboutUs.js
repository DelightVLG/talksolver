import React from 'react';
import './AboutUs.css';
// import TitleBlock from './TitleBlock.js' !! Надо поменять путь
import Workers from './Workers.js'
import nothing from '../../images/nothing.png';


function AboutUs() {
  return (
    <div className="about">
      {/*<TitleBlock />*/}
      <Workers />

      <div className="about__addition">
        <h2 className="about__addition-title">We believe our app is much more than a translation tool</h2>
        <div>
          <p className="about__addition-description">For most people, a translation is basically a marketing material.
          But to us, it’s a tool to communicate, to collaborate, to learn, and to play. And we
          believe it should be fun to build.</p>
          <p className="about__addition-description">We think our app, should be the playground for your imagination.
          A place where you create and share the most incredible stories, with a little magic touch. We’ll always
          do our best to make you shine, because at the end what truly matters is what you’re saying, not the
          tool you’re using.</p>

        </div>

         <img className="about__addition-image about__addition-image_position_right" src={nothing} alt="картинка" />
      </div>
    </div>
  )
}

export default AboutUs;
