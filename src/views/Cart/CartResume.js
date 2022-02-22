// Carrinho de compras

import React from "react";
import {View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleCart';
import { useCart } from "../../contexts/CartContext";


export default function CartResume( { navigation } ){

    const { cart, totalValue, removeCart } =  useCart();

    const Item = ({nameProduct, price, measurementProd }) => (
        <View style={{marginHorizontal: 5, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text_h2}>{nameProduct} - </Text>
          <Text style={styles.text}>R$ {price}/{measurementProd}</Text>
        </View>
      );

      const renderItem = ({ index, item }) => (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Item nameProduct={item.nameProduct} price={item.price.toFixed(2)} measurementProd={item.measurementProd}/>
                <TouchableOpacity onPress={() => removeCart(index)}>
                    <Ionicons name="close" size={28} color={'red'} style={{padding: 5, marginTop: 5, }}/>
                </TouchableOpacity>
        </View>
      );

    return(

        <View style={styles.container}>
                {/* Lista de itens */}
                <Text style={styles.text_view}>Itens adicionados a cesta</Text>
                <FlatList style={styles.flatlist}
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

                {/* Preço total */}
                {/* Botoes */}
                <View style={{flex:1, alignItems: 'center', justifyContent: 'flex-end', width: '100%', paddingHorizontal: 10, paddingBottom: 10}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Text style={styles.h2}>Total</Text>
                        <Text style={styles.h2}>R$ {totalValue}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} 
                        onPress={() => navigation.navigate('home')}>
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