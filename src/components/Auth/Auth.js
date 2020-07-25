import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase/firebase.utils';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({loading: true, currentUser: null});
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser({...user, currentUser: authUser, loading: false});
    });
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};
