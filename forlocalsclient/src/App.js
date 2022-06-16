import React, { useEffect, useState } from 'react';
import { auth } from "./Data/apiKeys"
import Routing from "./Routes";
import Navigation from "./Components/Navigation";
import { doesLocalExist } from "./Data/authManager";
import { getLocalByFKey } from './Data/LocalData';


function App() {
    const [local, setLocal] = useState({});

    useEffect(() => {
      auth.onAuthStateChanged((authed) => {
        if(authed) {
          sessionStorage.setItem("token", authed.accessToken);
          sessionStorage.setItem("firebaseKey", authed.uid);
          doesLocalExist(authed.accessToken).then(() => {
            getLocalByFKey(authed.uid).then(setLocal)
          });
        } else {
          setLocal(null);
          sessionStorage.clear();
        }
      });
    }, []);
    
    return (
        <div>
            <Navigation local={local} />
            <Routing local={local} />
        </div>
    );
}

export default App;
