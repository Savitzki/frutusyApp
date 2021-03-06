import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
      text_h2:{
        fontSize: 22,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-semiBold',
    },
      text_h3:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-regular',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    button_item:{
        width: '100%',
        height: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginVertical: 3,
        borderWidth: 1,
        borderColor: '#FFE656',
        elevation: 1,
    },
    tittle_item:{
        fontFamily: 'Baloo-semiBold', 
        fontSize: 30, 
        color: '#373737',
        marginHorizontal: 15,
    },
    description:{
        fontFamily: 'Baloo-regular',
        fontSize: 15,
        marginBottom: 15,
        marginHorizontal: 15,
    },
    bt_add_product:{
        borderBottomEndRadius: 5, 
        borderTopEndRadius: 5,  
        marginRight: 10, 
    },
    bt_remove_product:{
        borderBottomStartRadius: 5, 
        borderTopStartRadius: 5,
    },
    bt_settings_product:{
        width: 40, 
        height: 40, 
        backgroundColor: '#d45959', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    button:{
        margin: 5,
        width: 250,
        // width: '90%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    button_cart:{
        margin: 5,
        // width: 250,
        width: '90%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    input:{
        width: 60, 
        height: 40, 
        borderWidth:2, 
        borderColor: '#FFE656', 
        textAlign: 'center', 
        borderRadius: 5, 
        marginHorizontal: 5
    },
    obs: {
        fontFamily: 'Baloo-regular',
        fontSize: 16, 
        borderWidth: 2, 
        borderColor:'#d45959', 
        width: '90%', 
        borderRadius:10, 
        height: 50, 
        padding:2
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#FFE656'
    },
    searchBar:{
        fontFamily: 'Baloo-regular',
    },
    flatlist:{
        width: '90%',
    },
    text: {
        fontFamily: 'Baloo-regular',
        fontSize: 20,
        color: '#373737',
        marginLeft: 5,
        backgroundColor: "#FFE656",
        padding: 5,
        borderRadius: 5,
    },
    headerProduct: {
        flex:1, 
        backgroundColor: '#f2f2f2', 
        width: '100%', 
        marginBottom: 5, 
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderColor: "#FFE656",
    },

});

export default styles;