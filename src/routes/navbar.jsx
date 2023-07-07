import { NavLink } from 'react-router-dom';

import logo from "../img/imslogo.svg"

import './navbar.css'

export default function Navbar() {
    return (
        <div className='navContainer'>
            <nav>
                <NavLink className='nav-img' to='/'><img src={logo}></img></NavLink>
                <ul>
                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                    <li><NavLink to='/insights'>Insights</NavLink></li>
                    <li><NavLink to='/invoices'>Invoices</NavLink></li>
                    <li><NavLink to='/gst'>GST</NavLink></li>
                    <li><NavLink to='/help'>Help</NavLink></li>
                </ul>
                <NavLink to='/signup' className='linkButton'><button>Sign up</button></NavLink> 
            </nav>
            <NavLink to='/login' className="loginButton linkButton"><button >Log in</button></NavLink>
        </div>
    );
};