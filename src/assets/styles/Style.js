import { StyleSheet } from "react-native";  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    },
    font_regular:{
        fontFamily: 'Baloo-regular',
    },
    font_semiBold:{
        fontFamily: 'Baloo-semiBold',
    },
    font_bold:{
        fontFamily: 'Baloo-bold',
    },
    font_medium:{
        fontFamily: 'Baloo-medium',
    },
    text_view:{
        fontSize: 20,
        color: '#373737',
        margin: 5,
    },
    text_button:{
        fontSize: 20,
        textAlign: 'center',
        color: '#373737',
    },
    color_orange:{
        backgroundColor:'#FF941D'
    },
    color_red:{
        backgroundColor:'#d45959'
    },
    color_white:{
        backgroundColor:'#f2f2f2'
    },
    color_gray:{
        backgroundColor:'#373737'
    },
    color_yellow:{
        backgroundColor:'#FFE656'
    },
    color_green:{
        backgroundColor:'#9fd76d'
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
    button:{
        margin: 5,
        width: 350,
        // width: '90%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    button_2:{
        margin: 5,
        // width: 350,
        width: '90%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 40,
    },
    button_products:{
        margin: 5,
        width: '90%',
        height: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
    },
    headerView:{
        backgroundColor:"#FFE656",

    },
    header_txt:{
        fontFamily: 'Baloo-semiBold',
        fontSize: 20,
    },
    view_input:{
        flexDirection: "row",
        
    },
    text_input_register:{
        width: 170,
    },
    tab_bar:{
        backgroundColor: '#FFE656',
        padding: 5,
        alignItems: 'center',
    },
    button_init_view:{
        height: 120,
        marginBottom: 5,

    },
    box_search:{
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        width: '90%',
        borderWidth: 2,
        borderColor: '#FFE656',

    },
    text_init_view:{
        marginTop: 10,
        fontSize: 22,
        fontFamily: 'Baloo-semiBold'
    },
    img_search:{
        position: 'absolute',
        right: 10,
        paddingRight: 15,
    },
    img_button:{
        width: 36,
        height: 36,
        marginRight: 10,
        tintColor: '#373737',
    },
    button_set:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    text_view_sub:{
        fontSize: 14,
        padding: 0,
        margin: 0,
    },
    icon:{
        width: 220,
        height: 220,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    product_view:{
        flex: 2,
        flexDirection: "column",
        alignItems: 'center'
    },
    box_icon_home:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#FFE656', 
        width: 600, 
        height: 60, 
        // elevation: 2s
    },
    color_box:{
        backgroundColor: '#d45959'
    },
    text_bt_product:{
        fontFamily: 'Baloo-semiBold',
        fontSize: 26,
    },
    picker: {
        width: 150,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#666",
        backgroundColor: '#d45959',
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
    imageBackground: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "flex-start",
        // alignItems: "center"
      },
      separator:{
          borderBottomColor: '#c4c4c4', 
          borderBottomWidth: 1, 
          marginHorizontal: 10
    },
    login_msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    }),
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
    },
});

export default styles;