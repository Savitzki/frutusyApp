import React, {useState} from "react";
import {Text, View, TouchableOpacity,Image} from 'react-native';

import styles from './StyleHomeBar';

export default function InitView( { navigation } ) {
    const [frutas, setFrutas] = useState(false);
    const [verduras, setVerduras] = useState(false);
    const [legumes, setLegumes] = useState(false);
    // const [colorOption, setColorOption] = useState('');

    // Tela de inicio do app
    const handleClickFruit = () => {
        setFrutas(true);
        navigation.navigate('listProduct', { 
            name: 'Frutas'}, 
        );
    }
    const handleClickGreens = () => {
        setVerduras(true);
        navigation.navigate('listProduct', { 
            name: 'Verduras'}, 
        );
    }
    const handleClickVegetable = () => {
        setLegumes(true);
        navigation.navigate('listProduct', {
            name: 'Legumes',
        });
    }

    // Funcao para realizar a busca no banco 

    return(
        <View style={[styles.container, {alignItems: 'center'}]}>

            {/* <ImageBackground source={require('../../../assets/img/BG.png')} style={styles.imageBackground}>   */}

                        {/* texto de apoio */}
                        <View style={{marginTop: 10, marginBottom: 10, alignItems: 'center'}}>
                            <Text style={styles.text_view_bold}>Escolha uma categoria</Text>
                            <Text style={styles.text_view}>e monte sua cesta</Text>

                        {/* Opcao FRUTA */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#d45959' }]} activeOpacity={0.3} 
                            onPress={ handleClickFruit }>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button]} source={require('../../../assets/img/melancia-96.png')} />
                                <Text style={styles.text_view_bold}>FRUTAS</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Opcao VERDURA */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#9fd76d' }] } activeOpacity={0.3}
                            onPress={ handleClickGreens }>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button]} source={require('../../../assets/img/salada-96.png')} />
                                <View style={{alignItems: 'center'}}>
                                    <Text style={styles.text_view_bold}>VERDURAS</Text>
                                    <Text style={styles.text_view}>e temperos</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {/* Opcao LEGUMEs */}
                        <TouchableOpacity style={[styles.button, { backgroundColor:'#FF941D' }]} activeOpacity={0.3}
                            onPress={ handleClickVegetable }>
                            <View style={[styles.button_set]} >
                                <Image style={[styles.img_button,]} source={require('../../../assets/img/batata-96.png')} />
                                <Text style={styles.text_view_bold}>LEGUMES</Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                {/* </ImageBackground> */}

            </View>

    )
}