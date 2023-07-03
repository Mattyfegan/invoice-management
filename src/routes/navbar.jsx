import { NavLink, useOutletContext } from 'react-router-dom';

import './navbar.css'

export default function Navbar() {
    const [user] = useOutletContext();

    return (
        <nav>
            <NavLink className='navimg' to='/'><img src='/vite.svg'></img></NavLink>
            <ul>
                <li><NavLink to='/login'>login</NavLink></li>
                <li><NavLink to='/signup'>signup</NavLink></li>
                {user.user ? <li>{user.user.email}</li> : <></>}
            </ul>
        </nav>
    );
};