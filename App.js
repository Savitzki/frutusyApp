import React  from 'react';
import { StyleSheet } from "react-native";  

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Preload from './src/views/Preload/Preload';
import LoginView from './src/views/Login/LoginView';
import RegisterView from './src/views/Register/RegisterView';
import HomeView from './src/views/Home/HomeView';
import ProductView from './src/views/Product/ProductView';
import ListProductView from './src/views/Product/ListProductsView';
import PaymentView from './src/views/Payment/PaymentView';
import CartResume from './src/views/Cart/CartResume';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default class App extends React.Component{
  state = {
    fontsLoaded: false,
  };

  componentDidMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      // Lendo os arquivos da fonte
      // Strings da FontFamily
      'Baloo-regular': {
        uri: require('./src/assets/fonts/baloo/BalooBhaijaan2-Regular.ttf'),
        // display: Font.FontDisplay.FALLBACK,
      },

      'Baloo-bold': {
        uri: require('./src/assets/fonts/baloo/BalooBhaijaan2-Bold.ttf'),
        // display: Font.FontDisplay.FALLBACK,
      },

      'Baloo-medium': {
        uri: require('./src/assets/fonts/baloo/BalooBhaijaan2-Medium.ttf'),
        // display: Font.FontDisplay.FALLBACK,
      },

      'Baloo-semiBold': {
        uri: require('./src/assets/fonts/baloo/BalooBhaijaan2-SemiBold.ttf'),
        // display: Font.FontDisplay.FALLBACK,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  render(){
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName='login'>

        {/* Tela de login - 1 */}
            <Stack.Screen name='preload' component={Preload} options={{headerShown: false}}/>
            
            <Stack.Screen name='login' component={LoginView} options={{headerShown: false}}/>
            
            <Stack.Screen name='register' component={RegisterView} options={{headerShown: false}}/>

            <Stack.Screen name='listProduct' component={ListProductView}
              options={{ 
                headerTintColor: '#373737', 
                headerStyle: styles.headerView, 
                headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
                headerTitleAlign: 'center',
                title: 'Frutas'
            }}/>

            <Stack.Screen name='cartResume' component={CartResume} 
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Cesta'
            }}/>

            <Stack.Screen name='payment' component={PaymentView} 
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Finalizar pedido'
            }}/>

            <Stack.Screen name='product' component={ProductView}
              options={{
                title: 'Item'
              }}
            />

            <Stack.Screen name='home' 
                component={HomeView} 
                options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
                headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
                headerTitleAlign: 'center',
                headerLeft: false,
                title: 'Frutusy'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  headerView:{
    backgroundColor:"#FFE656",
},
});