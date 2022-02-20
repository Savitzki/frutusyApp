import React, { useState} from "react";
import {Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';

import styles from './StyleProduct';

export default function ProductView ( { navigation } ){


    const [checked, setChecked] = useState('quilo');
    
        return(
            <KeyboardAvoidingView style={[styles.container, {backgroundColor: '#f2f2f2'}]}>
                <View style={{flex:1, backgroundColor: '#d45959', width: '100%', padding: 5, marginBottom: 5}}>
                    <Text>Aqui vai a img</Text>
                </View>
                    {/* <Image source={require('../../assets/img/BG.png')}></Image> */}
                <View style={{flex:1, padding: 10}}>

                        <Text style={styles.tittle_item}>Maçã Gala</Text>
                        <Text style={styles.description}>A maçã gala é uma das frutas mais saborosas para se comer do pé.</Text>

                        <Text style={styles.text_h2}>Selecione quantidade (unidade ou kg) </Text>

                        <View style={{flexDirection: 'row', paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
                            {/* Opcao de quilo ou unidade */}
                            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                                <RadioButton
                                    value= "unidade"
                                    status={ checked === 'unidade' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('unidade')}
                                    color= '#d45959'
                                />
                                <Text style={styles.text_h3}>Unidade</Text>
                                <RadioButton
                                    value="quilo"
                                    status={ checked === 'quilo' ? 'checked' : 'unchecked' }
                                    onPress={() => setChecked('quilo')}
                                    color= '#d45959'
                                />
                                <Text style={styles.text_h3}>Quilo (KG)</Text>

                            </View>

                        {/* BOTAO DE REMOVER ITENS*/}
                        <TouchableOpacity >
                            <Ionicons name="remove-circle" size={24} color={'#d45959'}></Ionicons>
                        </TouchableOpacity>

                        <TextInput style={styles.input}></TextInput>

                        {/* BOTAO DE ADICIONAR ITENS */}
                        <TouchableOpacity>
                            <Ionicons name="add-circle" size={24} color={'#d45959'}></Ionicons>
                        </TouchableOpacity>

                        </View>

                        {/* BOTAO DE ADICIONAR A CESTA */}
                        <View>
                            <TouchableOpacity style={[styles.button, {backgroundColor:'#d45959', alignSelf: 'center'}]}
                                onPress={false}>
                                <Text style={{fontFamily: 'Baloo-medium', fontSize: 25, color: '#373737'}}>Adicionar a cesta</Text>
                            </TouchableOpacity>
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