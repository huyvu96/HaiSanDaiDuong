import React, { Component } from 'react';
import {View, StatusBar,Dimensions} from 'react-native';
import store from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './view/Home';
import History from './view/History';
import Account from './view/Account';
import Login from './view/Login';
import Cart from './view/Cart';
import global from './Styles/global';
import Notification from "./view/Notification";
import Discover from "./view/Discover";
const { height, width } = Dimensions.get('window');
const TabBar = createBottomTabNavigator({
        Home: Home,
        Discover: Discover,
        Notification: Notification,
        Account: Account},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              switch(routeName){
                  case 'Home':
                  iconName = (<Ionicons name="md-home" style={{fontSize: 35, color: tintColor}}/>);
                  break;
                  case 'Discover':
                      iconName = (<Ionicons name="md-globe" style={{fontSize: 35, color: tintColor}}/>);
                      break;
                  case 'Notification':
                      iconName = (<Ionicons name="md-notifications" style={{fontSize: 35, color: tintColor}}/>);
                      break;
                  case 'Account':
                  iconName = (<Ionicons name="md-contact" style={{fontSize: 35, color: tintColor}}/>);
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
                backgroundColor: global.colorF4,
                borderTopColor: 'white',
                borderTopWidth: 0.18,
                height: height / 14,
               
            },
            inactiveTintColor: global.colorA5,
            activeTintColor: global.colorTextPrimary,
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
            pressColor: '#ffff',
        }
    }
);
 const RootNavigator = createStackNavigator({
    TabBar: {screen: TabBar },
    Login: {screen:Login},
    Cart: {screen:Cart}
},
    {
        initialRouteName: "TabBar",
        headerMode: "none",
    }

);
export default class App extends Component {
    constructor(props){
        super(props);    
      }
    render() {
        return (
            <Provider store = {store}>
            <View style= {{flex:1}}>
            <StatusBar
                backgroundColor="#2980b9"
                translucent = {false}
            />
                <RootNavigator/>
            </View>           
            </Provider>
        );
    }
}