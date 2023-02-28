import React from 'react';
import Nav from './Nav';
import Aboutme from './Aboutme';
import Aboutme2 from './Aboutme2';
import Contacts from './Contacts';
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
      <Aboutme />
      <Threecolumns />
      <Aboutme2 />
      <Contacts />
    </div>

    </>
  );
}

export default App;
