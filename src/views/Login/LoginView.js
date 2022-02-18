import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./StyleLogin";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginView() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    if (email != "" && password != "") {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.reset({
            routes: [{name: 'home'}]
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert('Dados incorretos', 'Verifique e tente de novo');
        });
    }else{
      Alert.alert('Algo de errado não está certo', 'Verifique e preencha todos os campos');
    }
  }

  const handleRegisterClick = () => {
    // ir para a tela de cadastro sem poder voltar para a login
    navigation.reset({
      routes: [{ name: "register" }],
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Image
          style={styles.icon}
          source={require("../../assets/img/logo.png")}
        />
      </View>

      <Text style={styles.text}>Entre ou crie uma conta </Text>

      {/* Inputs de usuario e senha */}
      <TextInput
        placeholder="E-mail"
        style={styles.text_input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        style={styles.text_input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>

      {/* Esqueci minha senha */}
      <TouchableOpacity>
        <Text style={styles.text}>Esqueci minha senha</Text>
      </TouchableOpacity>

      {/* Botao entrar */}
      {/* <TouchableOpacity style={[styles.button, styles.color_orange]} onPress={() => this.props.navigation.navigate('Frutusy')}> */}
      <TouchableOpacity style={styles.button} onPress={handleLoginClick}>
        <Text style={styles.text_button}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegisterClick}>
        <Text style={[styles.text, { fontFamily: "Baloo-semiBold" }]}>
          Não tem conta? Clique para criar
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
