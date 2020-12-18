import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage'

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <MainPage />
        {/*OurHistory />*/}
        {/*AboutUs />*/}
        {/*ContactUs/>*/}
        {/*Footer />*/}
      </div>
    </div>
  );
}

export default App;
