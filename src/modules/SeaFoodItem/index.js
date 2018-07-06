import React, {Component} from 'react';
import {View, Dimensions, Image, TouchableWithoutFeedback,Animated} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import global from '../../Styles/global';
import TextComponent from "../../Components/Text/Text";

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
        const {uriImage, title, subText, onClick} = this.props;
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
                    <Image source={{uri: uriImage}} style={styles.imageItem}/>
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
    onClick: PropTypes.func
};
export default SeaFoodItem;