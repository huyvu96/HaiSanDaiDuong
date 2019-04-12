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
        backgroundColor: global.colorF3,
        //justifyContent: 'center',
    },
    icon:{
        fontSize: 35, color: global.colorF3
    },
    image:{
        backgroundColor: global.colorC5, height: 200, width: '100%'
    },
    round_avatar:{
        height: 80,
        width: 80,
        borderRadius: 60,
        position: 'absolute',
        top: 245 - 80 / 2,
        right: width / 2 - 45
    }
    
});