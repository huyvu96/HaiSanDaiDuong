import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableWithoutFeedback,Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import global from '../../Styles/global';
import TextComponent from "../../Components/Text/Text";
import ButtonWithIcon from "../../Components/Button/ButtonWithIcon";
import IconButton from "../../Components/Button/IconButton";
import FastImage from 'react-native-fast-image'

const {height, width} = Dimensions.get('window');

class SeaFoodItem extends Component {
    state = {
        animation: new Animated.Value(0)
    }
    componentWillMount(){
        Animated.timing(this.state.animation,{
            toValue:1,
            duration:500,
            delay: this.props.index* 400
        }).start();
    }

    render() {
        const {uriImage, title, subText, onClick, onBuy,onChecked} = this.props;
        return (
            <TouchableWithoutFeedback onPress ={onClick}>
                <Animated.View style={[styles.viewItem,{
                    transform:[
                {
                    translateY : this.state.animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [700,1]
                })
                }
                    ]
                }]}>

                    <FastImage  resizeMode={FastImage.resizeMode.cover}
                                source={{uri: uriImage}} style={styles.imageItem}/>
                    {/* <LinearGradient colors={['rgba(0,0,0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0,0,0, 0.2)']}
                                    style={styles.imageItemLinear}/> */}
                    <View style ={styles.viewText}>
                    <TextComponent numberOfLines={2}
                                   style={styles.styleTextName}
                                   text={title}
                                   color={global.colorTextPrimary}
                                   fontFamily={global.fontSemiBold}/>
                    <TextComponent style={styles.styleSubText}
                                   fontSize= {height / 50}
                                   color= {global.red}
                                   fontFamily={global.fontRegular} 
                                   text={"Giá: " + subText}/>
                    </View>
                    {
                        onChecked ? (<IconButton iconStyle={styles.iconStyle} btnStyle={styles.btnIconBuy} nameIcon={"ios-checkmark-circle"}/>) : (<ButtonWithIcon style={styles.btnBuy}
                                                          buttonText={'Mua Ngay'}
                                                          onClick={onBuy}
                                                          styleText={{fontSize:global.size15}}
                        />)
                    }

                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

SeaFoodItem.defaultProps = {};
SeaFoodItem.propTypes = {
    uriImage: PropTypes.node,
    title: PropTypes.string,
    subText: PropTypes.string,
    onClick: PropTypes.func,
    onBuy: PropTypes.func,
    onChecked: PropTypes.bool
};
export default SeaFoodItem;