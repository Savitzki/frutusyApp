import React, {useState, useContext} from 'react';
import  {KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';

import { createUserWithEmailAndPassword } from "firebase/auth";

import styles from './StyleRegister';


export default function RegisterView({ navigation }){
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passVerifiqued, setPassVerifiqued] = useState('');
  

  const handleRegisterClick = async () => {
    if(name != '' && email != '' && pass != '' && passVerifiqued != ''){
        if(pass == passVerifiqued){

            firebase.auth().onAuthStateChanged((user) => {
              if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                var uid = user.uid;
                navigation.reset({
                  routes: [{ name: 'home' }]
                });
                // ...
              } else {
                // User is signed out
                // ...
              }
            });
            }else{
              alert('Preencha todos os campos');

            }
    }else{
      alert('Preencha todos os campos');
    }

  }

  const handleLoginClick = () => {
    // ir para a tela de cadastro sem poder voltar para a login
    navigation.reset({
      routes: [{ name: 'login' }]
    });
  }

      return(
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
                {/* Instruções*/}
                <Text style={styles.text}>Insira suas informações para o cadastro</Text>

                {/* Inputs */}
                    <TextInput placeholder='Nome'  value={name} style={[styles.text_input]} onChangeText={text => setName(text)}></TextInput>
                    <TextInput placeholder='E-mail' value={email} style={styles.text_input} onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput placeholder='Senha' value={pass} secureTextEntry={true} style={styles.text_input} onChangeText={text => setPass(text)}></TextInput>
                    <TextInput placeholder='Repita sua senha' value={passVerifiqued} secureTextEntry={true} style={styles.text_input} onChangeText={text => setPassVerifiqued(text)}></TextInput>

                {/* Botao entrar */}
                {/* Para passar parametros as telas é só adicionar uma virgula depois da rota do navigate */}
                {/* navigation.navigate('Frutusy', {name: 'marina'}) */}
                {/* Para receber os parametros usar {route}  <Text>{route.params?.name}</Text> */}
                <TouchableOpacity style={styles.button} onPress={handleRegisterClick}>
                    <Text style={styles.text_button}>CADASTRAR</Text>
                  </TouchableOpacity>  
                  <TouchableOpacity onPress={handleLoginClick} style={{marginTop: 10}}>
                    <Text style={[styles.text,{fontFamily: 'Baloo-semiBold'}]}>Já tem conta? Clique aqui</Text>
                </TouchableOpacity>
          </KeyboardAvoidingView>
      );
}

