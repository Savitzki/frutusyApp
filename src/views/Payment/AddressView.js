// Pagamento, seleção de endereço e forma de pagamento

import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StylePayment';
import { useCart } from "../../contexts/CartContext";


export default function AddressView( { navigation } ){

    const myAddress = {
        street: 'Rua lalala',
        district: 'Gatolandia',
        number: '109',
        city: 'Tandres',
        state: 'TR'
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop: 20, marginBottom: 20, borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 10}}>
                <TouchableOpacity onPress={() => navigation.navigate('payment', {address: myAddress})}>
                    <Text style={styles.text}>{myAddress.street}, {myAddress.number}, {myAddress.district}, {myAddress.city} - {myAddress.state}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.button, {backgroundColor: 'gray'}]} disabled={true}>
                <Text style={[styles.text_button]}>NOVO ENDEREÇO</Text>
            </TouchableOpacity> 
        </View>

    );
}