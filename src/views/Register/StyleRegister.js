import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFE656'
    },
    text_input:{
        fontFamily: 'Baloo-regular',
        fontSize: 19,
        width: '90%',
        height: 60,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    text:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-regular',
    },
    text_button:{
        fontSize: 20,
        textAlign: 'center',
        color: '#373737',
        fontFamily: 'Baloo-semiBold',
    },
    button:{
        margin: 5,
        width: '90%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#FF941D',
    },

});

export default styles;