// pagina de estilo da screen CartResume
import { StyleSheet } from "react-native";  
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
    },
    icon:{
        width: 220,
        height: 220,
    },
    text_view:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-semiBold',
    },
    text_input:{
        fontFamily: 'Baloo-regular',
        fontSize: 19,
        width: 350,
        height: 60,
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        margin: 5
    },
    text_view_reset_pass:{
        fontFamily: 'Baloo-regular',
        fontSize: 16,
        color: '#373737',
        margin:10, 
        textAlign: "right",
    },
    flatlist:{
        width: '90%',
    },
    text_h2:{
        fontSize: 22,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-semiBold',
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
    view_btn:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text_button:{
        fontSize: 20,
        textAlign: 'center',
        color: '#373737',
        fontFamily: 'Baloo-semiBold'
    },
    h2:{
        fontFamily: 'Baloo-bold',
        fontSize: 22,
        
    },
    item: {
        marginHorizontal: 5,
        alignItems: 'center',
    },
});

export default styles;