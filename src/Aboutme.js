import Profilepic from './img/Leefam.jpg';


function Aboutme () {
    return (
        <nav className='aboutme'>
            <h1>Hello! My name is Vou. It's a pleasure to meet you.</h1>
            <p>FrontEnd Developer Graduate</p>
            <p>Coding is my passion. I want to help people have a better UX/UI experience, and I am commited to quality.</p>
        <nav className='profilepic'>
            <img src={Profilepic} alt='Profile Pic' style={{ width: '200px', height: '200px'}}/>
        <nav className='aboutme'>
            <p>I graduated with a Front-End Developer Professional Certificate in January 2023.</p>
            <p>Throughout my rigorous training program, I learned how to design a reponsive web and user interface with HTML5 & CCS3,</p>
            <p>programming with JavaScript & OOP, using React, and much more. </p>
            </nav>
        </nav>
        </nav>
    );
}

export default Aboutme;
