// pagina de estilo da screen payload
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
    },
    text_view:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-regular',
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
        fontSize: 20,
        textAlign: 'center',
        color: '#373737',
        fontFamily: 'Baloo-semiBold'
    },
});

export default styles;