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
    image_background: {
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    },
    btn_login:{
        flexDirection: 'row',
        height: 50,
        width: null,
        backgroundColor: '#4267B2',
        marginTop: 15,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    icon_facebook:{
        fontSize: 30,
        color: 'white',
        alignSelf: 'center'
    }

});