import React, {useEffect, useState} from 'react';
import  {View, Image} from 'react-native';
import styles from './StylePreload';
import { onAuthStateChanged } from "firebase/auth";

export default function Preload( { navigation } ){

      useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            navigation.navigate('home');
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
        
      }, []);
      return(

          <View style={styles.container}>

            {/* LOGO DO APP */}
            <View>
              <Image style={styles.icon} source={require('../../assets/img/logo.png')} />
            </View>
          </View>
      );
  }