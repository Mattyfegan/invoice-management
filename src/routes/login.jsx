import { Form, Navigate, redirect, NavLink, } from 'react-router-dom';

import { 
    signInWithRedirect, getRedirectResult, GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth';

import userAuthState from '../firebase/userAuthState.jsx';
import { auth } from '../firebase/firebaseConfig.jsx';
import './login.css'

export async function action({ request, params }) {
    const formData = await request.formData();
    const loginUser = Object.fromEntries(formData);

    await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password).catch((error) => {
        if (error.code === 'auth/wrong-password') { console.log('Wrong password'); };
    });

    return auth.currentUser ? redirect('/') : null;
};

export default function Login() {
    
    const { user, loading } = userAuthState();

    if (loading) { 
        return <div></div>; 
    };

    if (user) { 
        return <Navigate to='/' replace />;
    };

    return(
        <div className='panel'>
            <h1>Login</h1>
            <Form method='post'>
                <input 
                    placeholder="Email"
                    aria-label="email address"
                    type="email"
                    name="email"
                />
                <input 
                    placeholder="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                />
                <button type="submit">Login</button>
            </Form>
            <SignInWithGoogle />
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    );
};

function SignInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithRedirect(auth, provider); // NEED TO CATCH REDIRECT FOR THIS TO WORK (ALSO NEED WORKAROUND FOR DISABLED THIRD PARTY COOKIES)
    };

    return (
        <button onClick={ signInWithGoogle }>Sign In with Google</button>
    );
};