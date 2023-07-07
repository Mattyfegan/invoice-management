import { Form, Navigate, redirect, NavLink, } from 'react-router-dom';

import { 
    signInWithRedirect, getRedirectResult, GoogleAuthProvider,
    signInWithEmailAndPassword
} from 'firebase/auth';

import userAuthState from '../firebase/userAuthState.jsx';
import { auth } from '../firebase/firebaseConfig.jsx';
import './login.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

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
        <div className='panel login'>
            <h1>Login</h1>
            <Form method='post'>
                <input 
                    placeholder="Email"
                    aria-label="email address"
                    type="email"
                    name="email"
                /><br />
                <input 
                    placeholder="Password"
                    aria-label="password"
                    type="password"
                    name="password"
                /><br />
                <button type="submit">Login</button>
            </Form>
            <br /><h1 id='or'><span> OR </span></h1><br />
            <SignInWithGoogle /> <br />
            <NavLink to='/signup'>Not a member? Sign Up</NavLink>
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