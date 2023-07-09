import { NavLink, useFetcher, useOutletContext } from 'react-router-dom';

import { auth } from '../firebase/firebaseConfig.jsx';
import testSubmit from '../firebase/testSubmit.jsx';

import Navbar from './navbar.jsx';
import './home.css';

export default function Home() {

    const [user] = useOutletContext();

    if (user.loading) { 
        return <div></div>; 
    };

    return(
        <>
            <Navbar />
            <div className='panel'>
                <h1>Invoicing made easy!</h1>
                { user.user ? <div><TestSubmit /> <SignOut /></div> : 
                    <div>
                        <div><NavLink to='/login'>Login</NavLink></div> 
                        <div><NavLink to='/signup'>Sign Up</NavLink></div>
                    </div> 
                }
            </div>
        </>
    );
};

function SignOut() {
    return auth.currentUser && (
        <button onClick={ () => auth.signOut(() => navigate('/')) }>Sign Out</button>
    );
};

function TestSubmit() {
    const fetcher = useFetcher();
    const [user] = useOutletContext();

    const handleSubmit = async (event) => {
        await testSubmit(event, user.user.uid);
    };

    return (
        <fetcher.Form method="post" onSubmit={ handleSubmit }>
            <input 
                placeholder="Test Data"
                aria-label="Test Data"
                type="text"
                name="testdata"
            />
            <button type="submit">Submit</button>
        </fetcher.Form>
    );
};