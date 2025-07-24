import Timer from '../Timer/Timer.js';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBar'>
            <h1>TEFL Warrior</h1><br />
                <div className='links'>
                    <Link to='/'> Home</Link>
                    <a>Timer</a>
                    <Link to='/management'>Student Management</Link>
                </div>
        </div>
    )
}

export default NavBar;