import {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      console.log('auth',authUser);
      if(authUser) {
        // const now = new Date();
        // const item = {
        //   value: authUser,
        //   expiry: now.getDate() + 1000,
        // };
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => listener();
  }, []);

  return { user };
}