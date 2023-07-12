import React from 'react';
import { Form, Navigate, redirect, NavLink, useOutletContext} from 'react-router-dom';
import { 
    signInWithRedirect, getRedirectResult, GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth';

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

    const [user] = useOutletContext();

    if (user.loading) { 
        return <div></div>; 
    };

    if (user.user) { 
        return <Navigate to='/' replace />;
    };

    return (
        <div className='logBody'>
            <NavLink className='bruv' to='/'><img className='backToHome' src='../../public/imsLogo.svg' alt='logo'/></NavLink>
            <div className='panel login'>
                <h1>Sign Up</h1>
                <Form method='post'>
                    <input className='halfSize'
                        placeholder="First Name"
                        aria-label="First Name"
                        type="text"
                        name="fname"
                    />
                    <input className='halfSize'
                        placeholder="Last Name"
                        aria-label="Last Name"
                        type="text"
                        name="lname"
                    />
                    <input className='other'
                        placeholder="Email"
                        aria-label="Email address"
                        type="email"
                        name="email"
                    />
                    <input className='other'
                        placeholder="Password"
                        aria-label="password"
                        type="password"
                        name="password"
                    />
                    <input className='other'
                        placeholder="Company Name"
                        aria-label="Company Name"
                        type="text"
                        name="cname"
                    />
                    <button type="submit">Sign Up</button>
                </Form>
                <h1 id='or'><span> OR </span></h1>
                <SignInWithGoogle /> 
                <NavLink to='/login'>Already a member? Login</NavLink>
            </div>
        </div>
    );
};

function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithRedirect(auth, provider); // NEED TO CATCH REDIRECT FOR THIS TO WORK (ALSO NEED WORKAROUND FOR DISABLED THIRD PARTY COOKIES)
    };

    return (
        <button onClick={ signInWithGoogle }>Sign up with Google</button>
    );
};