import { Outlet } from 'react-router-dom';

import './root.css';
import '../firebase/firebaseConfig.jsx';

import Home from './home.jsx';
import Navbar from './navbar';
import Login, { action as loginAction } from './login.jsx';
import Signup, { action as signupAction } from './signup.jsx';

export const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "signup",
                element: <Signup />,
                action: signupAction,
            },
        ]
    }
];

export default function Root() {
    return(<><Navbar /><Outlet /></>);
};