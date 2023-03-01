import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import './App.css';
import Threecolumns from './Threecolumns';
import Oregon from './img/Oregon.jpg';


function App() {
  return (
    <>
    <div className='bg-image'
      style={{ backgroundImage: `url(${Oregon})` }}
    >
      <Nav />
      <Header />
      <Threecolumns />
      <Header2 />
      <Footer />
    </div>

    </>
  );
}

export default App;
