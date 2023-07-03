import { NavLink } from 'react-router-dom';

import './navbar.css'

export default function Navbar() {
    return (
        <nav>
            <NavLink className='navimg' to='/'><img src='/vite.svg'></img></NavLink>
            <ul>
                <li><NavLink to='/login'>login</NavLink></li>
                <li><NavLink to='/signup'>signup</NavLink></li>
            </ul>
        </nav>
    );
};