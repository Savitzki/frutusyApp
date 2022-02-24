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
            navigation.reset({
                routes:[{name: 'login'}]
            });
        // An error happened.
        });
    }

    return(
        <View style={styles.container}>
                    <Text style={styles.text_profile}>Olá Marina</Text>

            <View style={styles.section}>
                <TouchableOpacity style={styles.btn_section}>
                    <Ionicons name="document-outline" size={24} color={'#000'} />
                    <Text style={styles.text_btn_profile}>Meus dados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_section}>
                    <Ionicons name="location-outline" size={24} color={'#000'}/>
                    <Text style={styles.text_btn_profile}>Meus endereços</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn_section}
                    onPress={ LogOut }>
                    <Ionicons name="exit-outline" size={24} color={'#000'}/>
                    <Text style={styles.text_btn_profile}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}