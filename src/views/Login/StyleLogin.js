// pagina de estilo da screen Login
import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE656',
    },
    icon:{
        width: 220,
        height: 220,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-regular',
    },
    text_input:{
        fontFamily: 'Baloo-regular',
        fontSize: 19,
        width: '80%',
        height: 60,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    button:{
        margin: 5,
        width: '80%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#FF941D',
    },
    text_button:{
        fontSize: 22,
        textAlign: 'center',
        color: '#373737',
        fontFamily: 'Baloo-semiBold'
    },
    login_msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
});

export default styles;