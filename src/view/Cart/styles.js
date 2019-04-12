import {
    StyleSheet,
    Dimensions
} from 'react-native';
const {
    height,
    width
} = Dimensions.get('window');
import global from '../../Styles/global';
export const imageWidth = width;
export const imageHeight = (imageWidth / 500) * 330;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: global.coloF3,
        justifyContent: 'center',
    },
    icon: {
        fontSize: 35,
        color: global.colorF3
    },
    right_header:{
        backgroundColor: global.red,
        height: 30,
        width: 30,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    view_tamtinh:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: global.colorFF,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    view_list_card:{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        alignSelf: 'flex-end',
    },
    modal_box:{
        justifyContent: 'center',
        alignItems: 'center',
        height: '55%',
        width: '80%',
        borderRadius: 20,
        backgroundColor: global.colorTextPrimary,
    },
    btn_with_icon:{
        margin: 5,
        height: 40,
        borderRadius: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_with_icon_text:{
        color: global.colorTextPrimary,
        fontSize: global.sizeP14,
        fontFamily: global.fontBold,
        alignSelf: 'center',
        textDecorationLine: 'underline',
        textAlign: 'center'
    }
});