// Carrinho de compras

import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleCart';


export default function CartResume( { navigation } ){
    return(

        <View style={styles.container}>
            {/* <ImageBackground source={require('../../assets/img/BG.png')} style={styles.imageBackground}>  */}

                {/* Lista de itens */}
                <Text style={styles.text_view}>Itens adicionados a cesta</Text>
                <View style={styles.view_btn}>
                    {/* adicionar flatlist */}
                    <Text style={styles.text_view}>item</Text>
                    <TouchableOpacity>
                        <Ionicons name="close" size={28} color={'red'} style={{padding: 5, marginTop: 5, }}/>
                    </TouchableOpacity>
                </View>


                {/* Preço total */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={styles.h2}>Total</Text>
                    <Text style={styles.h2}>R$ 10,00</Text>
                </View>
                {/* Botoes */}
                <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end'}}>
                    <TouchableOpacity style={styles.button} 
                        onPress={() => navigation.navigate('listProduct')}>
                        <Text style={[styles.font_semiBold ,styles.text_button]}>ADICIONAR MAIS ITENS</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('payment')}>
                        <Text style={[styles.font_semiBold ,styles.text_button]}>CONTINUAR</Text>
                    </TouchableOpacity> 
                </View>

            {/* </ImageBackground> */}
        </View>

    );
}