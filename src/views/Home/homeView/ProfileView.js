import React from "react";
import {Text, View, TextInput, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';

export default function ProfileView() {

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

                    <TouchableOpacity style={styles.section}>
                        <Ionicons name="exit-outline" size={24} color={'#000'}/>
                        <Text style={styles.text_view}>Sair</Text>
                    </TouchableOpacity>

            {/* </ImageBackground> */}
        </View>

    )
}