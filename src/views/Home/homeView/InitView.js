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
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.text_view_bold}>Bem vindo(a) ao delivery de Hortifruti</Text>
                            <Text style={styles.text_view}>escolha uma categoria e monte sua cesta</Text>
                             

                            {/* Opcao FRUTA */}
                            <TouchableOpacity style={[styles.button]} activeOpacity={0.3} onPress={ handleClickFruit }>
                                    <Image style={[styles.img_button]} source={require('../../../assets/img/abacaxi.png')} />
                                    <Text style={styles.text_view_bold}>FRUTAS</Text>
                            </TouchableOpacity>

                            {/* Opcao VERDURA */}
                            <TouchableOpacity style={[styles.button] } activeOpacity={0.3} onPress={ handleClickGreens }>
                                    <Image style={[styles.img_button]} source={require('../../../assets/img/brocolis.png')} />
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.text_view_bold}>VERDURAS</Text>
                                        <Text style={styles.text_view}>e temperos</Text>
                                    </View>
                            </TouchableOpacity>

                            {/* Opcao LEGUMEs */}
                            <TouchableOpacity style={[styles.button]} activeOpacity={0.3} onPress={ handleClickVegetable }>
                                    <Image style={[styles.img_button,]} source={require('../../../assets/img/rabanete.png')} />
                                    <Text style={styles.text_view_bold}>LEGUMES</Text>
                            </TouchableOpacity>
                        </View>

                {/* </ImageBackground> */}

            </View>

    )
}