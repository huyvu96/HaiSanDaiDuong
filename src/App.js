import React, { Component } from 'react';
import {View, Text, StatusBar,AsyncStorage,Dimensions} from 'react-native';
import store from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screen/Home';
import History from './Screen/History';
import User from './Screen/User';
import Login from './Screen/Login';
import Cart from './Screen/Cart';
import global from './Styles/global';
const { height, width } = Dimensions.get('window');
const TabBar = createBottomTabNavigator({
    Home: Home,
    History: History,
    User: User},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              switch(routeName){
                  case 'Home':
                  iconName = (<Ionicons name="ios-home-outline" style={{fontSize: 35, color: tintColor}}/>);
                  break;
                  case 'History':
                  iconName = (<Ionicons name="ios-list-box-outline" style={{fontSize: 35, color: tintColor}}/>);
                  break;
                  case 'User':
                  iconName = (<Ionicons name="ios-contact-outline" style={{fontSize: 35, color: tintColor}}/>);
                  break;
              }
              return iconName;
            },
        }),
        initialRouteName: 'Home',
        lazyLoad: false,
        swipeEnabled: false,
        animationEnabled: false,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            style: {
                backgroundColor: global.colorTextPrimary,
                borderTopColor: 'white',
                borderTopWidth: 0.18,
                height: height / 14,
               
            },
            inactiveTintColor: global.colorA5,
            activeTintColor: 'white',
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
            pressColor: '#ffff',
        }
    }
)
 const RootNavigator = createStackNavigator({
    TabBar: { screen: TabBar },
    Login: {screen:Login},
    Cart:{screen:Cart}
},
    {
        initialRouteName: "TabBar",
        headerMode: "none",
    }

)
export default class App extends Component {
    constructor(props){
        super(props);    
      }
    render() {
        return (
            <Provider store = {store}>
            <View style= {{flex:1}}>
            <StatusBar
                backgroundColor="#151114"
                translucent = {false}
            />
                <RootNavigator/>
            </View>           
            </Provider>
        );
    }
}