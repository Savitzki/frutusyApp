import React from "react";
import {Text, View, TextInput, ImageBackground, TouchableOpacity,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';

export default function InitView( { navigation } ) {

    // Tela de inicio do app

    return(
        <View style={styles.container}>

            {/* <ImageBackground source={require('../../../assets/img/BG.png')} style={styles.imageBackground}>   */}

                        {/* texto de apoio */}
                        <View style={{marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
                            <Text style={styles.text_view_bold}>Escolha uma categoria</Text>
                            <Text style={styles.text_view}>e monte sua cesta</Text>

                        {/* Opcao FRUTA */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#d45959' }]} activeOpacity={0.3} 
                            onPress={() => navigation.navigate('listProduct')}>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button]} source={require('../../../assets/img/melancia-96.png')} />
                                <Text style={styles.text_view}>Frutas</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Opcao VERDURA */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#9fd76d' }] } activeOpacity={0.3}>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button]} source={require('../../../assets/img/salada-96.png')} />
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.text_view}>Verduras e</Text>
                                    <Text style={styles.text_view}>temperos</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Opcao LEGUME */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#FF941D' }]} activeOpacity={0.3}>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button,]} source={require('../../../assets/img/batata-96.png')} />
                                <Text style={styles.text_view}>Legumes</Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                {/* </ImageBackground> */}

            </View>

    )
}