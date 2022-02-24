import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, TouchableOpacity, Image, Alert} from 'react-native';
import { Searchbar } from 'react-native-paper';

import db from '../../firebaseConection';
import { collection, doc, getDocs, query, where } from "firebase/firestore";

import styles from './StyleProduct';
import { FontAwesome } from '@expo/vector-icons';

export default function ListProductView( { navigation, route } ){

  const [data, setData] =  useState([]);
  const [typePrd, setTypePrd] = useState("");
  // adicionar um state param para controlar o botao do carinho

  const getProducts = async () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("type", "==", typePrd));
  
    // Busca da lista de documentos da colletion products
    await getDocs(q)
    .then((querySnapshot) => {
      let dataProducts = [];
      querySnapshot.forEach((doc) => {
        const prod = {
          id: doc.id,
          nameProduct: doc.data().name,
          price: doc.data().price,
          measurementProd: doc.data().measurementUnit,
        }
        dataProducts.push(prod);
      });
      // Adicionando array de docs na variavel de estado
      setData(dataProducts);
    })
    .catch((error) => {
      Alert.alert('Vish', 'estamos enfrentando problemas, tente mais tarde')
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  useEffect( () => {
    const typeProduct = route.params.name;

    if(typeProduct === "Frutas"){
      setTypePrd("fruta");
    }else if(typeProduct === "Verduras"){
      setTypePrd("verdura");
    }else{
      setTypePrd("legume");
    }

    // console.log(typePrd);
      getProducts();
      return () => {
        setTypePrd({}); // This worked for me
      };
  }, [typePrd]);

  function handleProductClick(idItem) {
    navigation.navigate('product', {idProductSelected: idItem});
  }

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    const Item = ({nameProduct, price, measurementProd }) => (
        <View style={styles.item}>
          <Text style={styles.text_h2}>{nameProduct}</Text>
          <Text style={styles.text_h3}>R$ {price} / {measurementProd}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={[styles.button_item,{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}
            onPress={() => handleProductClick(item.id)}>
            <Item nameProduct={item.nameProduct} price={item.price.toFixed(2)} measurementProd={item.measurementProd}/>
            <FontAwesome name="shopping-basket" size={24} color="#373737" style={{marginRight: 20}}/>
          </TouchableOpacity>
        </View>
      );

    return(
        <View style={styles.container}>
          <Text style={styles.text_h2}> Clique em um item para detalhes</Text>
          <View style={{width: '90%', marginTop: 5}}>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery}
              inputStyle={styles.searchBar}
              style={{marginBottom: 5}}
            />
          </View>

            <FlatList style={styles.flatlist} showsVerticalScrollIndicator ={false}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
            />
        </View>
    );
}