import { Link } from "react-router-dom";
import Homeicon from './img/Homeicon.png';


function Nav() {
    return (
       <nav>
            <ul className='icon'>
                <li className="icon"><Link to="./"><img src={Homeicon} alt="Home Page icon by icons8" /></Link></li>
            </ul>
            <ul className="home">
                <li><Link to="./">Home</Link></li>
                <li><Link to="./aboutme">About Me</Link></li>
                <li><Link to="./projects">Projects</Link></li>
                <li><Link to="./resume">Resume</Link></li>
                <li><Link to="./contacts">Contacts</Link></li>
            </ul>
       </nav>
    );
}

export default Nav;