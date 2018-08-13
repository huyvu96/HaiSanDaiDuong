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
    icon:{
        fontSize: 35, color: global.colorF3
    }
});