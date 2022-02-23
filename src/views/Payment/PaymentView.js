// Pagamento, seleção de endereço e forma de pagamento

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StylePayment';
import { useCart } from "../../contexts/CartContext";


export default function PaymentView( { navigation, route}){

    
    const [telefone, setTelefone] = useState('');
    const [obs, setObs] = useState('');
    const [myAddress, setMyAddress] = useState({})
    
    const { cart, totalValue } =  useCart();
    
    // Funcao para verificar se todos os campos foram setados
    
    // Funcao para terminar pedido e ir para a tela de pedidos
    const handleFinaleClick = () => {
        // criar documento de pedido passando referencia de userId, itemId, endereço e total do pedido
    }
    const pedidoFinalizado = () => {
        Alert.alert('Sucesso', 'Seu pedido foi registrado com sucesso')
        navigation.navigate('Pedidos');
        // criar documento de pedido passando referencia de userId, itemId, endereço e total do pedido
    }
    
    useEffect( () => {
        const { address } = route.params;
        setMyAddress({address})
        // console.log(myAddress)
    }, [])

    return(
        <View style={styles.container}>
            <View style={{margin: 10, paddingBottom: 20}}>
                <Text style={styles.text}>Seu pedido está quase finalizado...</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: '#CCC', width: '90%'}}></View>
            <View style={{width: '100%', margin: 10}}>
                <TouchableOpacity style={{marginBottom: 10}} onPress={() => navigation.navigate('address')}>
                    <View style={{flexDirection: 'row', alignItems:'center', margin: 10, paddingLeft: 10, justifyContent: 'space-around'}}>
                        <Text style={styles.text}>Selecione o endereço para entrega</Text>
                        <Ionicons name="location-outline" size={28} color="black" style={{marginRight: 10}} />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{marginBottom: 10}}  onPress={() => navigation.navigate('paymentMethod')}>
                    <View style={{flexDirection: 'row', alignItems:'center', margin: 10, paddingLeft: 10, justifyContent: 'space-around'}}>
                        <Text style={styles.text}>Selecione o metodo de pagamento</Text>
                        <Ionicons name="ios-card-outline" size={28} color="black" style={{marginRight: 10}}/>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{borderWidth: 1, borderColor: '#CCC', width: '90%', marginBottom: 20}}></View>
            <View style={{width: '100%', justifyContent: 'center', paddingLeft: 30, alignItems: 'flex-start'}}>
                <Text style={styles.text}>Informe seu telefone</Text>
                </View>
                <TextInput
                    placeholder="Fone"
                    style={styles.text_input}
                    value={telefone}
                    onChangeText={(text) => setTelefone(text)}
                ></TextInput>
            <View style={{width: '100%', justifyContent: 'center', paddingLeft: 30, alignItems: 'flex-start'}}>
                <Text style={styles.text}>Alguma observação?</Text>
                </View>
                <TextInput
                    placeholder="Observação"
                    style={styles.text_input}
                    value={obs}
                    onChangeText={(text) => setObs(text)}
                ></TextInput>
            <View style={{borderWidth: 1, borderColor: '#CCC', width: '90%', marginBottom: 20}}></View>

            <Text style={[styles.text, {fontSize: 26, marginBottom: 30}]}>Total do seu pedido:        <Text style={styles.text_h1}>R${totalValue}</Text></Text>

            <TouchableOpacity></TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pedidoFinalizado}>
                <Text style={[styles.text_button]}>FINALIZAR PEDIDO</Text>
            </TouchableOpacity> 

            {/* onPress={() => navigation.navigate('payment')} */}
        </View>

    );
}