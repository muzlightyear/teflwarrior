import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navBar'>
            <h1>TEFL Warrior</h1>
                <div className='links'>
                    <Link to='/'> Home</Link>
                    <Link to='/management'>Student Management</Link>
                </div>
        </div>
    )
}

export default NavBar;