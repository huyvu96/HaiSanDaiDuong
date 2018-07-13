import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import global from '../../Styles/global';
import TextComponent from "../../Components/Text/Text";
import RoundAvatar from "../../Components/Avatar/RoundAvatar";
import IconButton from "../../Components/Button/IconButton";
import Gradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

class VideoCardItem extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    componentWillMount() {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 500,
            delay: this.props.index * 250
        }).start();
    }

    render() {
        const {uriImage,uriVideo, title, subText, onClick} = this.props;
        return (
            <TouchableWithoutFeedback onPress={onClick}>
                <Animated.View style={[styles.viewItem, {
                    transform: [
                        {
                            translateY: this.state.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [500, 1]
                            })
                        }
                    ]
                }]}>
                    <Image source={{uri: uriVideo}} style={styles.videoStyle}/>
                    <Gradient
                        colors={['rgba(0,0,0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.3)']}
                        style={styles.gradient}/>
                    <IconButton nameIcon={'md-play'} iconStyle={{color:'white', fontSize:50}} btnStyle={{position:'absolute', top:250/2 - 25,right: width/2 - 25}}/>

                    <View style={styles.viewLeft}>
                        <RoundAvatar uriImage={uriImage} style={styles.imageItem}/>
                        <View style={{marginLeft: 10,flex:1}}>
                            <TextComponent
                                style={styles.nameFish}
                                color={global.colorTextBlack}
                                fontFamily={global.fontRegular}
                                size={global.sizeP15}
                                text={title}
                                numberOfLines={2}/>
                            <TextComponent
                                style={styles.nameFish}
                                color={global.colorA5}
                                fontFamily={global.fontRegularItalic}
                                size={global.sizeP12}
                                text={subText}
                                numberOfLines={1}/>
                        </View>
                    </View>
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

VideoCardItem.defaultProps = {};
VideoCardItem.propTypes = {
    uriImage: PropTypes.node,
    title: PropTypes.string,
    subText: PropTypes.string,
    onClick: PropTypes.func,
    uriVideo:PropTypes.string
};
export default VideoCardItem;