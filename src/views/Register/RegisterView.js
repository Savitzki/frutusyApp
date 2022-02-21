import React, {useState} from 'react';
import  {KeyboardAvoidingView, Platform, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';

import { getAuth, createUserWithEmailAndPassword,   } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import styles from './StyleRegister';
import db from '../../firebaseConection';

export default function RegisterView({ navigation }){
  
  const [firstName, setFisrtName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVerifiqued, setPassVerifiqued] = useState('');
  // const userUID = '';

  const handleRegisterClick = () => {
    // Verificando se todos os campos foram preenchidos
    if(firstName != '' && lastName != '' && email != '' && password != '' && passVerifiqued != ''){

      // verificando se o campo das senhas são iguais
        if(password == passVerifiqued){
          const auth = getAuth();
          // criando usuario de autenticação para usar no login depois
          createUserWithEmailAndPassword(auth, email, password)
          // const user = auth.currentUser;
          .then((userCredential) => {
            // salvando nome e sobrenome da criatura
                const uid = userCredential.user.uid;
                const data = {
                  nome : firstName,
                  sobrenome: lastName
                }
                setDoc(doc(db, 'users', uid), data)
                  .then( () => {
                    // Alert.alert('sucesso', 'conta criada com sucesso');
                    navigation.reset({
                      routes:[{name: 'login'}]
                    })
                  })
                    .catch((error) => {
                      // Alert.alert('Erro', 'Deu erro em add o doc')
                      const errorCode = error.code;
                      const errorMessage = error.message;
                    })
          })
          .catch((error) => {
            Alert.alert('Erro', 'erro ao criar conta')
            const errorCode = error.code;
            const errorMessage = error.message;
          })     
          
        }else{
          alert('As senhas devem ser iguais');
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
                    <TextInput placeholder='Nome'  value={firstName} style={[styles.text_input]} onChangeText={text => setFisrtName(text)}></TextInput>
                    <TextInput placeholder='Sobrenome'  value={lastName} style={[styles.text_input]} onChangeText={text => setLastName(text)}></TextInput>
                    <TextInput placeholder='E-mail' value={email} style={styles.text_input} onChangeText={text => setEmail(text)}></TextInput>
                    <TextInput placeholder='Senha' value={password} secureTextEntry={true} style={styles.text_input} onChangeText={text => setPassword(text)}></TextInput>
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

