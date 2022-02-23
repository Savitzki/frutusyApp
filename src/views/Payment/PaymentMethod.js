// Pagamento, seleção de endereço e forma de pagamento

import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StylePayment';
import { useCart } from "../../contexts/CartContext";


export default function PaymentMethodView( { navigation } ){


    return(
        <View style={styles.container}>
            <Text style={[styles.text, {marginTop: 15, alignSelf: 'flex-start', marginLeft: 35}]}>Como você deseja pagar?</Text>

            <View style={{flex:1, width: '100%',  alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity style={styles.method} onPress={() => navigation.navigate('payment')}>
                    <Ionicons name="card-outline" size={60} color="#373737" />
                    <Text style={styles.text}>Cartão de crédito</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.method} onPress={() => navigation.navigate('payment')}>
                    <Ionicons name="card" size={60} color="#373737" />
                    <Text style={styles.text}>Cartão de débito</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.method} onPress={() => navigation.navigate('payment')}>
                    <Ionicons name="md-cash-outline" size={60} color="#373737" />
                    <Text style={styles.text}>Dinheiro</Text>

                </TouchableOpacity>

            </View>
        </View>

    );
}