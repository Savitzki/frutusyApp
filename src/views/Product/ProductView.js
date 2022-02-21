import React, { useEffect, useState} from "react";
import {Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';

import db from '../../firebaseConection';
import { doc, getDoc} from "firebase/firestore";

import styles from './StyleProduct';

export default function ProductView ( { navigation, route } ){

    const aux = route.params.idProductSelected;
    const [quant, setQuant] = useState(0);
    const [dataProduct, setDataProduct] =  useState({});
    const [idProd, setIdProd] = useState("");

    const getProduct = async () => {
        console.log('dentro da function, idProd:', idProd);
        const productsRef = doc(db, "products", idProd);
        const docProduct = await getDoc(productsRef);
        

        // verificar tratamento de erro e pq ele faz a consulta duas vzs
        if(docProduct.exists()){
            console.log("Document data:", docProduct.data());
            // let dataProducts = [];
            const prod = {
                      id: docProduct.data().id,
                      nameProduct: docProduct.data().name,
                      descriptionProd: docProduct.data().description,
                      price: docProduct.data().price,
                      measurementProd: docProduct.data().measurementUnit,
                      imageProd: docProduct.data().URLimage,
                    }
            // dataProducts.push(prod);
            setDataProduct(prod);
        }
      }

    useEffect( () => {
        console.log(aux);
        setIdProd(aux);
        getProduct();

        return () => {
          setIdProd("");
        };

    }, [idProd]);

    
return(
    <KeyboardAvoidingView style={[styles.container, {backgroundColor: '#f2f2f2'}]}>
        <View style={{flex:1, backgroundColor: '#f2f2f2', width: '100%', padding: 5, marginBottom: 5, borderBottomWidth: 10, borderColor: "#FFE656"}}>
            <Image style={{width: 350, height: 350, alignSelf: 'center'}} source={{uri: dataProduct.imageProd}}></Image>
        </View>
        <View style={{flex:1, padding: 10}}>

                <Text style={styles.tittle_item}>{dataProduct.nameProduct}</Text>
                <Text style={styles.description}>{dataProduct.descriptionProd}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
                <Text style={styles.text_h2}>Preço por: </Text>
                <Text style={styles.text}>{dataProduct.measurementProd}</Text>

            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 15, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                {/* BOTAO DE ADICIONAR A CESTA */}
                <View>
                    <TouchableOpacity style={[styles.button, {backgroundColor:'#FFE656', alignSelf: 'center'}]}
                        onPress={false}>
                        <Text style={{fontFamily: 'Baloo-medium', fontSize: 22, color: '#373737'}}>Adicionar a cesta</Text>
                    </TouchableOpacity>
                </View>
            </View>



                <FAB
                    style={styles.fab}
                    icon="basket"
                    color= '#373737'
                    onPress={() => navigation.navigate('cartResume')}
                />
        </View>
    </KeyboardAvoidingView>
    );
}