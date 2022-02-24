import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import {InitView, ProfileView, SolicitView} from './../index';
import styles from './StyleHome';

export default function HomeView() {

    const Tab = createMaterialBottomTabNavigator();

    return (      
        // Barra de navegação inferior
        <Tab.Navigator
        
                activeColor='#373737'
                inactiveColor="#A4A4A4"
                labeled='true'
                
                barStyle={styles.tab_bar}
               
        >
            <Tab.Screen
                    name="Inicio"
                    component={InitView}
                    options={{
                    tabBarIcon:({ color })=>(
                        <MaterialIcons name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                    name="Pedidos"
                    component={SolicitView}
                    options={{
                    tabBarIcon:({ color })=>(
                        <MaterialIcons name="account-balance-wallet" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                    name="Perfil"
                    component={ProfileView}
                    options={{
                    tabBarIcon:({ color })=>(
                        <MaterialIcons name="person" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}