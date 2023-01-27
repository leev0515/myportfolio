import Profilepic from './img/Leefam.jpg';

function Aboutme () {
    return (
        <nav className='aboutme'>
            <h1>FrontEnd Developer Graduate</h1>
            <p>Coding is my passion. I want to help people have a better UX/UI experience, and I enjoy what I do.</p>
        <nav className='profilepic'>
            <img src={Profilepic} alt='Profile Pic' style={{ width: '200px', height: '200px'}}/>
        </nav>
        </nav>
    );
}

export default Aboutme;