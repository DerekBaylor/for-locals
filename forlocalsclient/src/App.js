import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onLoginStatusChange } from "./Data/authManager";
import Routing from "./Routes";
import { getLocalById } from "./Data/LocalData";
import Navigation from "./Components/Navigation";
import { Spinner } from 'reactstrap';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
  };
  firebase.initializeApp(firebaseConfig);

function App() {
    const [loggedIn, setLoggedIn] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        onLoginStatusChange(setLoggedIn);

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getLocalById(user.UserId).then((local) => {
                    if (local.isAdmin === "Y") {
                        setIsAdmin(true);
                    }
                });
            }
        });
    }, []);
    
    if (loggedIn === null) {
        return <Spinner className="app-spinner dark"/>;
      }

    return (
        <div>
            <Navigation local={loggedIn} />
            <Routing local={loggedIn} admin={isAdmin} />
        </div>
    );
}

export default App;
