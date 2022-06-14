import React, { useEffect, useState } from 'react';
import { auth } from "./Data/apiKeys"
import Routing from "./Routes";
import Navigation from "./Components/Navigation";
import { doesLocalExist } from "./Data/authManager";
import { getLocalByFKey } from './Data/LocalData';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [local, setLocal] = useState({});

    const checkForAdmin = () => {
      getLocalByFKey()
      if (local.isAdmin === "Y") {
          setIsAdmin(true);
      } else {
          setIsAdmin(false);
      }
    };


    useEffect(() => {
      auth.onAuthStateChanged((authed) => {
        if(authed) {
          sessionStorage.setItem("token", authed.accessToken);
          sessionStorage.setItem("firebaseKey", authed.uid);
          doesLocalExist(authed.accessToken).then(getLocalByFKey(local.firebaseKey).then(setLocal));
        } else {
          setLocal(null);
          setIsAdmin(false);
        }
      });
    }, []);
    
    return (
        <div>
            <Navigation local={local} />
            <Routing local={local} admin={isAdmin} />
        </div>
    );
}

export default App;
