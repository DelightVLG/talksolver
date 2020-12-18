import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import React from 'react';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        {/*MainPage />*/}
        {/*OurHistory />*/}
        {/*AboutUs />*/}
        {/*ContactUs/>*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
