
import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f2',
    },
    text:{
        fontFamily: 'Baloo-regular',
        fontSize: 22,
        color: '#373737'
    },
    text_h1:{
        fontFamily: 'Baloo-bold',
        fontSize: 26,
        color: '#373737'
    },
    button:{
        margin: 5,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#FFE656',
    },
    text_input:{
        fontFamily: 'Baloo-regular',
        fontSize: 19,
        width: '90%',
        height: 60,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        borderColor: '#373737',
        marginBottom: 20,
    },
    button:{
        margin: 5,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 40,
        backgroundColor:'#FFE656',
    },
    text_button:{
        fontSize: 24,
        textAlign: 'center',
        color: '#373737',
        fontFamily: 'Baloo-semiBold'
    },
    item_view:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    imageBackground: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "flex-start",
      },
    method: {
        width: '90%', 
        height: 150, 
        borderWidth: 2, 
        borderColor: '#FFE656', 
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 10
    },

});
export default styles;