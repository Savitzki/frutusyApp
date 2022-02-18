
import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    text_view_bold:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-semiBold'
    },
    text_view:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
        fontFamily: 'Baloo-regular',
        marginLeft: 10,
    },
    text_profile:{
        fontSize: 24,
        fontFamily: 'Baloo-semiBold', 
        color: '#373737',
        margin: 5,
        marginBottom: 10,
    },
    button:{
        margin: 5,
        width: 350,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 5,
    },
    img_button:{
        width: 36,
        height: 36,
        marginRight: 10,
        tintColor: '#373737',
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
    button_set:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    separator:{
        borderBottomColor: '#c4c4c4', 
        borderBottomWidth: 1, 
        marginHorizontal: 10
    },
    section:{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: '90%',
        marginBottom: 2, 
        backgroundColor: '#f2f2f2',
        height: 50,
        padding: 5,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});
export default styles;