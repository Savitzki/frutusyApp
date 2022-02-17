
import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
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
        fontSize: 20,
        textAlign: 'center',
        color: '#373737',
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

});
export default styles;