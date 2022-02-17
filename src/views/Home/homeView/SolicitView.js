import React from "react";
import {Text, View, TextInput, ImageBackground, FlatList, ScrollView, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';

export default function SolicitView() {

    return(

        <View style={styles.container}>
            {/* <ImageBackground source={require('../../../assets/img/BG.png')} style={styles.imageBackground}> */}
                <Text>Texto </Text>
                    
                {/* historico de pedidos */}
            {/* </ImageBackground> */}
        </View>

    )
}