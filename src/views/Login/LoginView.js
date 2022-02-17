import React, {useState}from 'react';
import  {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword  } from "firebase/auth";

import styles from './StyleLogin';


export default function LoginView(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLoginClick = async () => {
      if(email != '' && pass != ''){
        await firebase.auth().signInWithEmailAndPassword(email, pass)
          .then((userCredential) => {
            console.log(userCredential)
            // Signed in
            const user = userCredential.user;
            navigation.reset({
              routes: [{ name: 'home' }]
            });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Erro: email ou senha inválidos')
            // ..
          });
      }else{
        alert('Preencha todos os campos');
      }
  
    }

    const handleRegisterClick = () => {
      // ir para a tela de cadastro sem poder voltar para a login
      navigation.reset({
        routes: [{ name: 'register' }]
      });
    }

      return(
          <KeyboardAvoidingView style={styles.container}>

            <View>
              <Image style={styles.icon} source={require('../../assets/img/logo.png')} />
            </View>

            <Text style={styles.text}>Entre ou crie uma conta </Text>

            {/* Inputs de usuario e senha */}
            <TextInput placeholder='E-mail' style={styles.text_input} value={email} onChangeText={text => setEmail(text)}></TextInput>
            <TextInput placeholder='Senha' secureTextEntry={true} style={styles.text_input} value={pass} onChangeText={text => setPass(text)}></TextInput>
                
                {/* Esqueci minha senha */}
            <TouchableOpacity>
              <Text style={styles.text}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegisterClick}>
              <Text style={[styles.text,{fontFamily: 'Baloo-semiBold'}]}>Criar minha conta</Text>
            </TouchableOpacity>

                {/* Botao entrar */}
                {/* <TouchableOpacity style={[styles.button, styles.color_orange]} onPress={() => this.props.navigation.navigate('Frutusy')}> */}
                <TouchableOpacity style={styles.button} onPress={handleLoginClick}>
                    <Text style={styles.text_button}>ENTRAR</Text>
                </TouchableOpacity>  
          </KeyboardAvoidingView>
      );
  }

