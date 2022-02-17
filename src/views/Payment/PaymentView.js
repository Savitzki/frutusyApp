// Pagamento, seleção de endereço e forma de pagamento

import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StylePayment';


export default function PaymentView(){
    return(

        <View style={styles.container}>
            {/* <ImageBackground source={require('../../assets/img/BG.png')} style={styles.imageBackground}>  */}
                <View style={{ marginHorizontal: 20}}>
                        <Text style={[styles.font_semiBold, {marginTop: 10, fontSize: 22}]}>Itens adicionados a cesta</Text>
                        <View style={styles.item_view}>
                            <Text style={styles.text_view}>item</Text>
                            <TouchableOpacity>
                                <Ionicons name="close" size={28} color={'red'} style={{padding: 5, marginTop: 5, }}/>
                            </TouchableOpacity>
                        </View>
                </View>
                
                <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>ADICIONAR MAIS ITENS</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>CONTINUAR</Text>
                    </TouchableOpacity> 
                </View>

            {/* </ImageBackground> */}
        </View>

    );
}