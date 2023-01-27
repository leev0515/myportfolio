import React from 'react';
import Nav from './Nav';
import Profilepic from './img/Leefam.jpg';
import './App.css';

function App() {
  return (
    <>
      <Nav />
    <nav className='Home'>
      <h1>FrontEnd Developer Graduate</h1>
      <p>Coding is my passion. I want to help people have a better UX/UI experience, and I enjoy what I do.</p>
    </nav>
    <nav className='Profilepic'>
      <img src={Profilepic} alt='Profile Pic' style={{ width: '200px', height: '200px'}}/>
    </nav>
    </>
  );
}

export default App;
