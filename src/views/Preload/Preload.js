import React, {useEffect, useState} from 'react';
import LoginView from '../Login/LoginView';
import HomeView from '../Home/HomeView';

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Preload( { navigation } ){

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('home');
        const uid = user.uid;

      } else {
        navigation.navigate('login');
        const uid = user.uid;
      }
    });
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     navigation.navigate('home');
    //     const uid = user.uid;
    //     // ...
    //   } else {
    //     navigation.navigate('login');
    //     const uid = user.uid;
    //   }
    // });
  }, []);

  return(
    !user ? <LoginView /> : <HomeView />
  );
}