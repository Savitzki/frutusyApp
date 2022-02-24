import React from "react";
import {Text, View, TextInput, ImageBackground, FlatList, ScrollView, Image,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './StyleHomeBar';

export default function SolicitView() {

    return(

        <View style={styles.container}>
                <Text style={styles.text_view_bold}>Meus pedidos </Text>
                <View style={styles.view_solicit}>
                    <Text style={styles.text_view}> PEDIDO ATUAL</Text>
                </View>
                <View style={styles.view_solicit}>
                    <View style={{borderWidth: 1, borderColor: '#c4c4c4', width: '90%', margin: 10}}></View>
                    <TouchableOpacity style={styles.btn_solicit}>
                        <Text style={styles.text_view}>*PEDIDO MAIS RECENTE*</Text>
                    </TouchableOpacity>
                </View>
                    
                {/* historico de pedidos */}
        </View>

    )
}