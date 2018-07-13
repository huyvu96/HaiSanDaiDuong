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

class NotificationListItem extends Component {
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
                    <View style={styles.viewLeft}>
                        <RoundAvatar uriImage={uriImage} avatarStyle={styles.imageItem}/>
                        <View style={{marginLeft: 10,flex:1}}>
                            <TextComponent
                                style={styles.nameFish}
                                color={global.colorTextBlack}
                                fontFamily={global.fontRegular}
                                size={global.sizeP14}
                                text={title}
                                numberOfLines={4}/>
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

NotificationListItem.defaultProps = {};
NotificationListItem.propTypes = {
    uriImage: PropTypes.node,
    title: PropTypes.string,
    subText: PropTypes.string,
    onClick: PropTypes.func,
    uriVideo:PropTypes.string
};
export default NotificationListItem;