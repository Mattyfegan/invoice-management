import React from 'react';
import { Form, Navigate, redirect, NavLink, } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from 'firebase/auth';

import userAuthState from '../firebase/userAuthState.jsx';
import { auth } from '../firebase/firebaseConfig.jsx';
import './signup.css'

export async function action({ request, params }) {
    const formData = await request.formData();
    const newUser = Object.fromEntries(formData);

    await createUserWithEmailAndPassword(auth, newUser.email, newUser.password);

    return auth.currentUser ? redirect('/') : null;
};

export default function Signup() {

    const { user, loading } = userAuthState();

    if (loading) { 
        return <div></div>; 
    };

    if (user) { 
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