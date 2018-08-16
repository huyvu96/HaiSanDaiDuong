import React, {Component} from 'react';
import {View,UIManager,LayoutAnimation} from 'react-native';
import styles from './styles';
import data from '../../data';
import SeaFoodGridView from '../../modules/SeaFoodGridView';
import global from '../../Styles/global';
import Text from '../../Components/Text/Text';
import TabItems from "../../modules/Tabs/TabItems";
import Header from '../../modules/Header/index';
import IconButton from '../../Components/Button/IconButton';
import ModalBox from 'react-native-modalbox';
import ButtonWithIcon from '../../Components/Button/ButtonWithIcon';
import FloatingButton from '../../Components/Button/FloatingButton';
import * as NAME_ACTION from '../../Redux/Constants/actionTypes';
import * as ACTION from '../../Redux/ActionCreator/cartActionCreator';
import {connect} from "react-redux";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isList: false,
            openPhone: false,
            openCart: false,
            index: 0,
            routes: [
                {key: '1', title: 'Cá Tươi'},
                {key: '2', title: 'Cá sống'},
                {key: '3', title: 'Cua - Ghẹ'},
                {key: '4', title: 'Sò - Ốc'},
                {key: '5', title: 'Tôm - Mực'},],
            onScrolling: false,
        };
        this._listViewOffset= 0;
        this.onScrolling = false;
        this._onScroll = this._onScroll.bind(this);
    }
    _alert(item){
        alert(JSON.stringify(this.props.dataCart));
    }
    _onScroll(event) {
        // Simple fade-in / fade-out animation
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        const CustomLayoutLinear = {
            duration: 250,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            },
            delete: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity
            }
        };
        // Check if the user is scrolling up or down by confronting the new scroll position with your own one
        const currentOffset = event.nativeEvent.contentOffset.y;
        if (Math.abs(currentOffset - this._listViewOffset) <= 50) {
            return;
        }
        const direction =
            currentOffset > 0 && currentOffset > this._listViewOffset ? "up" : "down";
        // If the user is scrolling down (and the is still visible) hide it
        const onScrolling = direction === "up";
        if (
            onScrolling !== this.state.onScrolling
        ) {
            LayoutAnimation.configureNext(CustomLayoutLinear);
            //this.onScrolling = onScrolling;
            this.setState({onScrolling});
        }
        console.log(this._listViewOffset, this.state.onScrolling);
        // Update your scroll position
        this._listViewOffset = currentOffset;
    }
    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <SeaFoodGridView onScroll={this._onScroll} data={this.props.dataShop.filter(e => e.category === 1)}/>;
            case '2':
                return <SeaFoodGridView onScroll={this._onScroll} data={this.props.dataShop.filter(e => e.category === 2)}/>;
            case '3':
                return <SeaFoodGridView onScroll={this._onScroll} data={this.props.dataShop.filter(e => e.category === 3)}/>;
            case '4':
                return <SeaFoodGridView onScroll={this._onScroll} data={this.props.dataShop.filter(e => e.category === 4)}/>;
            case '5':
                return <SeaFoodGridView onScroll={this._onScroll} data={this.props.dataShop.filter(e => e.category === 5)}/>;
            default:
                return null;
        }
    };
    _handleIndexChange = index =>
        this.setState({
            index,
        });

    render() {
        return (
            <View style={styles.container}>
                <Header
                    customHeaderStyle={{backgroundColor: global.colorTextPrimary}}
                    leftHeader={<IconButton nameIcon='ios-search' iconStyle={{fontSize: 35, color: global.colorF3}}/>}
                    body={<Text
                        text='Hải Sản Đại Dương'
                        color={global.colorF3}
                        size={global.sizeP20}
                        fontFamily={global.fontLight}
                        bold={global.fontWeightDark}/>}
                    rightHeader={
                        <IconButton badge={this.props.dataCart.length.toString() === '0' ? null :this.props.dataCart.length.toString() } nameIcon='ios-cart' iconStyle={{fontSize: 35, color: global.colorF3}}
                                    onClick={() => this.props.navigation.push('Cart')}/>}
                />
                <TabItems
                    renderScene={this._renderScene}
                    index={this.state.index}
                    routes={this.state.routes}
                    onIndexChange={this._handleIndexChange}
                />
                {
                    !this.state.openPhone ? (!this.state.onScrolling ? <FloatingButton nameIcon='ios-call' onClick={() => {
                        this.setState({openPhone: true})
                    }}/> : null):(null)
                }
                <ModalBox
                    style={styles.modalbox}
                    isOpen={this.state.openPhone}
                    animationDuration ={0}
                    swipeToClose={false}
                    position='center'
                    onClosed={() => this.setState({openPhone: false})}
                    onOpened={() => this.setState({openPhone: true})}
                    backdropPressToClose={true}
                    onClosingState={() => this.setState({openPhone: false})}
                    >
                    <Text text='Chọn số điện thoại gọi ngay nào'
                          color={global.colorF3}
                          fontFamily={global.fontRegular}
                          size={global.sizeP18}
                          style={{textAlign: 'center'}}/>
                    <ButtonWithIcon
                        buttonText='08888.333.333'
                        style={styles.btn_with_icon}
                        styleText={styles.btn_with_icon_text}
                    />
                    <ButtonWithIcon
                        buttonText='08888.333.333'
                        style={styles.btn_with_icon}
                        styleText={styles.btn_with_icon_text}
                    />
                </ModalBox>

            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        dataCart: state.cart.dataCart,
        dataShop: state.cart.dataShop
    };
}
function mapDispatchToProps(dispatch) {
  return {
      addItemToCart: items => dispatch(ACTION.addItemToCart(items)),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);


