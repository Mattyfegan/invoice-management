import { NavLink,useOutletContext } from 'react-router-dom';

import logo from "../../public/imsLogo.svg"

import './navbar.css'

export default function Navbar() {
    const [user] = useOutletContext();
    if (user.loading) { 
        return <div></div>; 
    };
    console.log(user.user)
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
                { user.user ? <div><SignOut /></div> : <NavLink to='/login' className='linkButton'><button>Login</button></NavLink>}
            </nav>
        </div>
    );
};

function SignOut() {
    return auth.currentUser && (
        <button onClick={ () => auth.signOut(() => navigate('/')) }>Sign Out</button>
    );
};