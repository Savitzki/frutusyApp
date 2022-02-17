import React from 'react';
import {Text, View, ImageBackground, FlatList, Image, TouchableOpacity} from 'react-native';
import { Searchbar, FAB } from 'react-native-paper';

import styles from './StyleProduct';

const DATA = [
    {
      id: '1',
      title: 'Maçã gala',
      price: '3.00',
    },
    {
      id: '2',
      title: 'Pera',
      price: '2.87',
    },
    {
      id: '3',
      title: 'Laranja pêra',
      price: '1.99',
    },
  ];


export default function ListProductView( { navigation } ){

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

    const Item = ({ title, price }) => (
        <View style={styles.item}>
          <Text style={styles.text_h2}>{title}</Text>
          <Text style={styles.text_h3}>R$ {price} kg</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.button_item}
            onPress={() => navigation.navigate('product')}>
            <Item title={item.title} price={item.price} />
          </TouchableOpacity>
        </View>
      );

    return(
        <View style={styles.container}>
            {/* <ImageBackground source={require('../../assets/img/BG.png')} style={styles.imageBackground}> */}
            <Searchbar
              placeholder="Pesquisar"
              onChangeText={onChangeSearch}
              value={searchQuery}
              inputStyle={styles.searchBar}
              style={{marginBottom: 5}}
            />

            <FlatList style={styles.flatlist}
                    data={DATA}
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