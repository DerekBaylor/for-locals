import Navigation from "./Components/Navigation";
import Routing from "./Routes";
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { onLoginStatusChange } from "./Data/authManager";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getLocals } from "./Data/LocalData";
import { Spinner } from 'reactstrap';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

function App() {
    const [local, setLocal] = useState(null);

    useEffect(() => {
        onLoginStatusChange(setLocal);

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getLocals(user.uid).then(() => {
                    if (user.isLoggedIn === null) {
                        return <Spinner className="app-spinner light" />;
                    }
                })
            }
        });
    }, []);

    return (
        <div>
            <Navigation lcoal={local} />
            <Routing local={local} />
        </div>
    );
}

export default App;
