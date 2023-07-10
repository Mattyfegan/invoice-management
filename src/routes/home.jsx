import { NavLink, useFetcher, useOutletContext } from 'react-router-dom';

import { auth } from '../firebase/firebaseConfig.jsx';
import NavBar from './navbar.jsx'
import testSubmit from '../firebase/testSubmit.jsx';
import userAuthState from '../firebase/userAuthState.jsx';
import './home.css';

export default function Home() {

    const [user] = useOutletContext();

    if (user.loading) { 
        return <div></div>; 
    };

    return(
        <>
            <NavBar />
            <div id='landing-bg'>
                <div id='firstSection'>
                    <div id='titleBox'>
                        <h1 id='titleText'>Invoice Management, <span className='colorText'>Made Easy</span></h1>
                    </div>
                </div>
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