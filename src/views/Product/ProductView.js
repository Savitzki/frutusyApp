import React, { useEffect, useState} from "react";
import {Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';

import db from '../../firebaseConection';
import { doc, getDoc} from "firebase/firestore";

import styles from './StyleProduct';
import { useCart } from "../../contexts/CartContext";

export default function ProductView ( { navigation, route } ){

    const aux = route.params.idProductSelected;
    const [quant, setQuant] = useState(1);
    const [dataProduct, setDataProduct] =  useState({});
    const [idProd, setIdProd] = useState("");
    const { addCart } =  useCart();

    const getProduct = async () => {
        // console.log('dentro da function, idProd:', idProd);
        const productsRef = doc(db, "products", idProd);
        const docProduct = await getDoc(productsRef);
        
        if(docProduct.exists()){
            // console.log("Document data:", docProduct.data());
            const prod = {
                        id: docProduct.data().id,
                        nameProduct: docProduct.data().name,
                        descriptionProd: docProduct.data().description,
                        price: docProduct.data().price,
                        measurementProd: docProduct.data().measurementUnit,
                        imageProd: docProduct.data().URLimage,
                    }
            setDataProduct(prod);
        }
      }

    useEffect( () => {
        // console.log(aux);
        setIdProd(aux);
        if(idProd != ""){
            getProduct();
        }

    }, [idProd]);
    
return(
    <KeyboardAvoidingView style={[styles.container, {backgroundColor: '#f2f2f2'}]}>
        <View style={styles.headerProduct}>
            <Image style={{width: '100%', height: '100%', alignSelf: 'center'}} source={{uri: dataProduct.imageProd}}></Image>
        </View>
        <View style={{width: '100%', paddingBottom: 5}}>

            <Text style={styles.tittle_item}>{dataProduct.nameProduct}</Text>
            <Text style={styles.description}>{dataProduct.descriptionProd}</Text>



            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 15, justifyContent: 'space-around'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text_h2}>R$ {dataProduct.price}</Text>
                    <Text style={styles.text}>{dataProduct.measurementProd}</Text>
                </View>

                {/* ESSE TRECHO DE CODIGO NAO FAZ NADA (TEORIA: REGULAR A QUANTIDADE DE ITENS PARA A CESTA) */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                    {/* BOTAO DE REMOVER ITENS*/}
                    <TouchableOpacity >
                        <Ionicons name="remove-circle" size={28} color={'#FFE656'}></Ionicons>
                    </TouchableOpacity>
                    {/* INPUT DE QUANTIDADE DE ITENS */}
                    <TextInput style={styles.input}>{quant}</TextInput>
                    {/* BOTAO DE ADICIONAR ITENS */}
                    <TouchableOpacity>
                        <Ionicons name="add-circle" size={28} color={'#FFE656'}></Ionicons>
                    </TouchableOpacity>
                </View>

            </View>
                {/* BOTAO DE ADICIONAR A CESTA */}
                <View>
                    <TouchableOpacity style={[styles.button_cart, {backgroundColor:'#FFE656', alignSelf: 'center'}]}
                        onPress={() => addCart(dataProduct)}>
                        <Text style={{fontFamily: 'Baloo-medium', fontSize: 22, color: '#373737'}}>Adicionar a cesta</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={[styles.button_cart, {backgroundColor:'#FFE656', alignSelf: 'center'}]} 
                        onPress={() => navigation.navigate('cartResume')}>
                        <Text style={{fontFamily: 'Baloo-medium', fontSize: 22, color: '#373737'}}>Ver cesta</Text>
                    </TouchableOpacity>
                </View>
        </View>
    </KeyboardAvoidingView>
    );
}