import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig.jsx'

const UserAuthState = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return <>{children({ user, loading })}</>;
};

export default UserAuthState;