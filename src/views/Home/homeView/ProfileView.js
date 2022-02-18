import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';
import {  getAuth, signOut } from "firebase/auth";


export default function ProfileView() {
    const [userLogged, setUserLogged] = useState(false)

    // VER PORQUE NAO TÁ FUNCIONANDO
    const LogOut = () => {
        useEffect(() => {
            const auth = getAuth();
            signOut(auth).then(() => {
                setUserLogged(user ? true : false);
                navigation.reset({
                    routes: [{name: 'login'}]
                });
            }).catch((error) => {
            // An error happened.
            });
          }, []);

    }

    return(

        <View style={styles.container}>
            {/* <ImageBackground source={require('../../../assets/img/BG.png')} style={styles.imageBackground}> */}

                {/* MUDAR PARA BOTOES */}
                
                {/* dados do perfil */}
                <View style={{padding: 10}}>
                    <Text style={styles.text_profile}>Olá Marina</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.section}>
                        <Ionicons name="document-outline" size={24} color={'#000'} />
                        <Text style={styles.text_view}>Meus dados</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.section}>
                        <Ionicons name="location-outline" size={24} color={'#000'}/>
                        <Text style={styles.text_view}>Meus endereços</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity style={styles.section}
                        onPress={LogOut}
                    >
                        <Ionicons name="exit-outline" size={24} color={'#000'}/>
                        <Text style={styles.text_view}>Sair</Text>
                    </TouchableOpacity>

            {/* </ImageBackground> */}
        </View>

    )
}