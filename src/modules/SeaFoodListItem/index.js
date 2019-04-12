import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableOpacity, Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import global from '../../Styles/global';
import TextComponent from "../../Components/Text/Text";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";

const {height, width} = Dimensions.get('window');

class SeaFoodListItem extends Component {
    state = {
        animation: new Animated.Value(0)
    };

    componentWillMount() {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 300,
            delay: this.props.index * 400
        }).start();
    }

    render() {
        const {uriImage, title, subText, onClick, onRemove, onChecked} = this.props;
        return (
            <TouchableOpacity onPress={onClick}>
                <Animated.View style={[styles.viewItem, {
                    transform: [
                        {
                            translateY: this.state.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: [400, 1]
                            })
                        }
                    ]
                }]}>
                    <View style={styles.viewLeft}>
                        <Image source={{uri: uriImage}} style={styles.imageItem}/>
                        <View style={{marginLeft: 20}}>
                            <TextComponent
                                style={styles.nameFish}
                                color={global.colorTextPrimary}
                                fontFamily={global.fontRegular}
                                size={global.sizeP18}
                                text={title}/>
                            <TextComponent
                                style={styles.nameFish}
                                color={global.red}
                                fontFamily={global.fontRegularItalic}
                                size={global.sizeP16}
                                text={subText}/>
                        </View>
                    </View>
                    <ButtonWithIcon buttonText='Xoá'
                                    onClick={onRemove}
                                    style={styles.buttonStyle}
                                    styleText={styles.textStyle}
                    />
                </Animated.View>
            </TouchableOpacity>
        );
    }
}

SeaFoodListItem.defaultProps = {};
SeaFoodListItem.propTypes = {
    uriImage: PropTypes.node,
    title: PropTypes.string,
    subText: PropTypes.string,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
    onChecked: PropTypes.bool
};
export default SeaFoodListItem;