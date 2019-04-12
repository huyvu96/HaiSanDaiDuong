import React, {Component} from 'react';
import {
    StatusBar,
    Keyboard,
    View,
    Text,
    Dimensions,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Animated,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
    Alert,
    ActivityIndicator
} from "react-native"
import PropTypes from 'prop-types'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import firebase from 'react-native-firebase';
import IconButton from "../Components/Button/IconButton";
import ButtonWithIcon from "../Components/Button/ButtonWithIcon";
const {height, width} = Dimensions.get('window');

class ScreenLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInput: false
        }
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(130)
    }

    increaseHeightOfLogin = () => {
        Animated.timing(this.loginHeight, {
            toValue: height,
            duration: 500
        }).start(() => {
            this.setState({
                isInput: true,
            })
        })
    };
    decreaseHeightOfLogin = () => {
        Keyboard.dismiss();
        Animated.timing(this.loginHeight, {
            toValue: 130,
            duration: 500
        }).start()
    };

    render() {
        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [130, height],
            outputRange: [1, 0]
        })
        const marginTop = this.loginHeight.interpolate({
            inputRange: [130, height],
            outputRange: [20, 100]
        })
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [130, height],
            outputRange: [0, 1]
        })
        console.log(this.state.isInput)


        return (
            // View lớn nhất
            <View style={{flex: 1}}>
                {/* <StatusBar
                backgroundColor="transparent"
                translucent = {true}
            /> */}
                <ImageBackground
                    source={{uri: 'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
                    style={{flex: 1}}
                >
                    {/* View này là View trên */}
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                        <Animatable.View
                            animation="zoomIn" interationCount={1}
                            style={{
                                backgroundColor: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 100,
                                width: 100
                            }}>
                            <Text style={{
                                fontSize: 26,
                                fontWeight: 'bold'
                            }}>iTV</Text>
                        </Animatable.View>
                    </View>

                    {/** BOTTOM HALF **/}
                    <Animatable.View animation="slideInUp" interationCount={1}>
                        <Animated.View
                            style={{
                                height: this.loginHeight,
                                backgroundColor: 'white'
                            }}>
                            {/* Nút back */}
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    height: 60,
                                    width: 60,
                                    top: 15,
                                    left: 25,
                                    zIndex: 100,
                                    opacity: headerBackArrowOpacity,
                                    backgroundColor: 'transparent'
                                }}>
                                <TouchableOpacity
                                    onPress={() => this.decreaseHeightOfLogin()}>
                                    <Icon name="md-arrow-back"
                                          style={{color: 'white', fontSize: 30, position: 'relative'}}/>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    flex: 1,
                                    opacity: headerBackArrowOpacity,
                                    backgroundColor: 'transparent'
                                }}>
                                {/* View chính sign in sign up */}

                                <View style={{flex: 1}}>
                                    {/* <ImageBackground
              source={{uri:'https://raw.githubusercontent.com/react-native-training/react-native-elements-app/master/assets/images/bg_screen3.jpg'}}
                                  style={{
                                      flex: 1,
                                      height,
                                      width,
                                      top: 0,
                                      left: 0,
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                  }}
                              >
                                 
                              </ImageBackground> */}
                                    {/*<Login isInput = {this.state.isInput}/>*/}

                                </View>

                            </Animated.View>
                            {/* dòng chữ you need to login with facebook */}
                            {/* Biến mất dòng chữ */}
                            <Animated.View
                                style={{
                                    opacity: headerTextOpacity,
                                    alignItems: 'flex-start',
                                    paddingHorizontal: 25,
                                    marginTop: 25
                                }}
                            >
                                <Text style={{
                                    fontSize: 24,
                                    color: 'black',
                                }}>You need to sign in with phone</Text>
                            </Animated.View>
                            {/* Button log in facebook */}
                            {/* Biến mất button */}

                            <Animated.View
                                style={{
                                    opacity: headerTextOpacity,
                                }}>
                                <ButtonWithIcon style={{
                                    height: 50,
                                    width: null,
                                    backgroundColor: 'transparent',
                                    marginTop: 15,
                                    paddingHorizontal: 25,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center'
                                }} nameIcon={'ios-call'} icoStyle={{
                                    fontSize: 30,
                                    color: 'green',
                                    alignSelf: 'center'
                                }} buttonText={'+84 ....'} styleText={{
                                    color: "#000",
                                    fontSize: 23,
                                    marginLeft: 20
                                }} onClick={() => this.increaseHeightOfLogin()}/>
                            </Animated.View>
                        </Animated.View>
                        {/* view social network */}
                        {/*<View*/}
                        {/*style={{*/}
                        {/*height: 45,*/}
                        {/*backgroundColor: 'white',*/}
                        {/*alignItems: 'center',*/}
                        {/*}}*/}
                        {/*>*/}
                        {/*<TouchableOpacity*/}
                        {/*onPress={() => this.increaseHeightOfLogin()}*/}
                        {/*>*/}
                        {/*<Text style={{*/}
                        {/*color: '#5a7fdf',*/}
                        {/*fontWeight: 'bold',*/}
                        {/*fontSize: 18*/}
                        {/*}}>*/}
                        {/*Or connect using a social account*/}
                        {/*</Text>*/}
                        {/*</TouchableOpacity>*/}
                        {/*</View>*/}
                    </Animatable.View>
                    {/* Nút forward */}
                    <Animated.View
                        style={{
                            position: 'absolute',
                            height: 60,
                            width: 60,
                            right: 10,
                            bottom: 30,
                            zIndex: 100,
                            backgroundColor: '#54575e',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 30,
                            opacity: headerBackArrowOpacity
                        }}>
                        <IconButton nameIcon="md-arrow-forward" iconStyle={{color: 'white', fontSize: 30}}
                                    onClick={() => this.decreaseHeightOfLogin()}/>
                    </Animated.View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default ScreenLogin