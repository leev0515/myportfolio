import Profilepic from './img/Leefam.jpg';


function Header () {
    return (
        <header className='description'>
            <section>
            <p className='displaytitle primary2'>Hello! My name is Vou. It's a pleasure to meet you.</p>
            <p className='subtitle'>FrontEnd Developer Graduate</p>
            <p className='leadtext'>
                Coding is my passion. I want to help people have a better UX/UI experience, and I am commited to quality.
            </p>
        <header className='profilepic'>
            <img src={Profilepic} alt='Profile Pic' style={{ width: '200px', height: '200px'}}/>
        <header className='aboutme'>
            <p className='leadtext'>I graduated with a Front-End Developer Professional Certificate in January 2023.
            Throughout my rigorous training program, I learned how to design a reponsive web and user interface with HTML5 & CCS3,
            programming with JavaScript & OOP, using React, and much more. <p/>
            </p>
            </header>
        </header>
        </section>
        </header>
    );
}

export default Header;