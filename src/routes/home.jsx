import { NavLink, useFetcher } from 'react-router-dom';

import { auth } from '../firebase/firebaseConfig.jsx';
import testSubmit from '../firebase/testSubmit.jsx';
import userAuthState from '../firebase/userAuthState.jsx';
import './home.css';

export default function Home() {

    const { user, loading } = userAuthState();

    if (loading) { 
        return <div></div>; 
    };

    return(
        <div className='panel'>
            <h1>Invoicing made easy!</h1>
            { user ? <div><TestSubmit /> <SignOut /></div> : 
                <div>
                    <div><NavLink to='/login'>Login</NavLink></div> 
                    <div><NavLink to='/signup'>Sign Up</NavLink></div>
                </div> 
            }
        </div>
    );
};

function SignOut() {
    return auth.currentUser && (
        <button onClick={ () => auth.signOut(() => navigate('/')) }>Sign Out</button>
    );
};

function TestSubmit() {
    const fetcher = useFetcher();

    return (
        <fetcher.Form method="post" onSubmit={ testSubmit }>
            <input 
                placeholder="Test Data"
                aria-label="Test Data"
                type="text"
                name="testdata"
            />
            <button type="submit">Submit</button>
        </fetcher.Form>
    );

}