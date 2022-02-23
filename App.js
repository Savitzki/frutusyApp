import React  from 'react';
import { StyleSheet } from "react-native";  
import { Ionicons } from '@expo/vector-icons';

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
import AddressView from './src/views/Payment/AddressView';
import PaymentMethod from './src/views/Payment/PaymentMethod';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
// import firebase from './src/firebaseConection';

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
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home'>

        {/* Tela de login - 1 */}
            <Stack.Screen name='preload' component={Preload} options={{headerShown: false}}/>
            
            <Stack.Screen name='login' component={LoginView} options={{headerShown: false}}/>
            
            <Stack.Screen name='register' component={RegisterView} options={{headerShown: false}}/>

            <Stack.Screen name='listProduct' component={ListProductView}
              options={({route}) => ({ 
                headerTintColor: '#373737', 
                headerStyle: styles.headerView,
                headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
                headerTitleAlign: 'center',
                title: route.params.name,
            })}/>

            <Stack.Screen name='cartResume' component={CartResume} 
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Cesta'
            }}/>

            <Stack.Screen name='payment' component={PaymentView} initialParams={{ address: {} }}
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Finalizar pedido'
            }}/>

            <Stack.Screen name='address' component={AddressView} 
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Meus endereços'
            }}/>

            <Stack.Screen name='paymentMethod' component={PaymentMethod} 
              options={{ headerTintColor: '#373737', headerStyle: styles.headerView, 
              headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
              headerTitleAlign: 'center',
              title: 'Metodos de pagamento'
            }}/>

            <Stack.Screen name='product' component={ProductView}
              options={{
                headerTintColor: '#373737', headerStyle: styles.headerView, 
                headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
                headerTitleAlign: 'center',
                title: 'Item',
              }}/>

            <Stack.Screen name='home' 
                component={HomeView} 
                options={{ 
                  headerTintColor: '#373737', 
                  headerStyle: styles.headerView,
                  headerTitleStyle: { fontFamily: 'Baloo-semiBold', fontSize: 25}, 
                  headerTitleAlign: 'center',
                  headerLeft: false,
                  title: 'Frutusy',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
        
    );
  }
}

const styles = StyleSheet.create({
  headerView:{
    backgroundColor:"#FFE656",
  },
});