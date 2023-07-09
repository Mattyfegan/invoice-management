import { Form, Navigate, redirect, NavLink, useOutletContext } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase/firebaseConfig.jsx';

import './signup.css'

export async function action({ request, params }) {
    const formData = await request.formData();
    const newUser = Object.fromEntries(formData);

    await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);

    return auth.currentUser ? redirect('/') : null;
};

export default function Signup() {

    const [user] = useOutletContext();

    if (user.loading) { 
        return <div></div>; 
    };

    if (user.user) { 
        return <Navigate to='/' replace />;
    };

    return (
        <div className='panel'>
            <h1>Sign Up</h1>
            <Form method='post'>
                <input 
                    placeholder="Email"
                    aria-label="Email address"
                    type="email"
                    name="email"
                />
                <input 
                    placeholder="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                />
                <button type="submit">Sign Up</button>
            </Form>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};