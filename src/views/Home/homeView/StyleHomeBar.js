
import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f2f2f2',
        padding: 10,
    },
    text_view_bold:{
        fontSize: 22,
        color: '#373737',
        fontFamily: 'Baloo-bold',
    },
    text_view:{
        fontSize: 20,
        color: '#373737',
        fontFamily: 'Baloo-regular',
        marginBottom: 10,
    },
    text_btn_profile:{
        fontSize: 20,
        color: '#373737',
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
        backgroundColor: '#FFE656',
    },
    img_button:{
        width: 50,
        height: 50,
        marginRight: 10,
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
        alignItems: 'flex-start', 
        width: '100%',
        height: '100%',
        marginBottom: 2, 
        padding: 5,
        marginHorizontal: 20,
    },
    btn_section:{
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        width: '100%',
        height: 50,
        paddingLeft: 10,
    },
    btn_solicit:{
        marginTop: 10, 
        borderWidth: 1, 
        borderColor: '#FFE656', 
        width: '90%', 
        height: 100,
        alignItems: 'center', 
        justifyContent: 'center', 
        elevation: 1, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 15, 
    },
    view_solicit:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    }
});
export default styles;