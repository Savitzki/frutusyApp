import React, { useEffect, useState } from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import { Searchbar, FAB } from 'react-native-paper';

import db from '../../firebaseConection';
import { collection, doc, getDocs, query, where } from "firebase/firestore";

import styles from './StyleProduct';

export default function ListProductView( { navigation, route } ){

  const [data, setData] =  useState([]);
  const [typePrd, setTypePrd] = useState("");

  const getProducts = async () => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("type", "==", typePrd));
  
    // const querySnapshot = getDocs(q);
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
        // console.log(doc.id, " => ", doc.data());
      });
      setData(dataProducts);
    })
    .catch((error) => {
      Alert.alert('Erro', 'erro ao criar conta')
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

    console.log(typePrd);
      getProducts();
      return () => {
        setTypePrd({}); // This worked for me
      };

  }, [typePrd]);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    const Item = ({ nameProduct, price, measurementProd }) => (
        <View style={styles.item}>
          <Text style={styles.text_h2}>{nameProduct}</Text>
          <Text style={styles.text_h3}>R$ {price} / {measurementProd}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button_item}
            onPress={() => navigation.navigate('product')}>
            <Item nameProduct={item.nameProduct} price={item.price} measurementProd={item.measurementProd}/>
          </TouchableOpacity>
        </View>
      );

    return(
        <View style={styles.container}>
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery}
              inputStyle={styles.searchBar}
              style={{marginBottom: 5}}
            />

            <FlatList style={styles.flatlist}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
            />
                <FAB
                  style={styles.fab}
                  icon="basket"
                  color= '#373737'
                  onPress={() => navigation.navigate('cartResume')}
                />
            {/* </ImageBackground> */}
        </View>



    );
}