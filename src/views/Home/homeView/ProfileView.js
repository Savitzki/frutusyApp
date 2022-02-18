import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';
import {  getAuth, signOut } from "firebase/auth";


export default function ProfileView( {navigation} ) {
    // VER PORQUE NAO TÁ FUNCIONANDO
    const LogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
            navigation.reset({
                routes:[{name: 'login'}]
            });
        }).catch((error) => {
        // An error happened.
        });
    }

    return(
        <View style={styles.container}>
                    <Text style={styles.text_profile}>Olá Marina</Text>

                    <TouchableOpacity style={styles.section}>
                        <Ionicons name="document-outline" size={24} color={'#000'} />
                        <Text style={styles.text_view}>Meus dados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section}>
                        <Ionicons name="location-outline" size={24} color={'#000'}/>
                        <Text style={styles.text_view}>Meus endereços</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.section}
                        onPress={ LogOut }>
                        <Ionicons name="exit-outline" size={24} color={'#000'}/>
                        <Text style={styles.text_view}>Sair</Text>
                    </TouchableOpacity>
        </View>
    )
}