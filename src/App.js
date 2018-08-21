import React, {Component} from 'react';
import {View, StatusBar, Dimensions} from 'react-native';
import configureStore from './Redux/Store/configStore'
import { PersistGate } from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './view/Home';
import Account from './view/Account';
import Login from './view/Login';
import Cart from './view/Cart';
import global from './Styles/global';
import Notification from "./view/Notification";
import Discover from "./view/Discover";
import History from './view/History'
const { persistor, store } = configureStore();

const {height, width} = Dimensions.get('window');
const TabBar = createBottomTabNavigator({
        Home: Home,
        Discover: Discover,
        Notification: Notification,
        Account: Account
    }, {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                switch (routeName) {
                    case 'Home':
                        iconName = "md-home";
                        break;
                    case 'Discover':
                        iconName = "md-globe";
                        break;
                    case 'Notification':
                        iconName = "md-notifications";
                        break;
                    case 'Account':
                        iconName = "md-contact";
                        break;
                }
                return <Ionicons name={iconName} style={{fontSize: height/18, color: tintColor}}/>;
            },
        }),
        initialRouteName: 'Home',
        lazyLoad: true,
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
        TabBar: {screen: TabBar},
        Login: {screen: Login},
        Cart: {screen: Cart},
        History:{screen:History},
    },
    {
        initialRouteName: "Login",
        headerMode: "none",
    }
);
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <View style={{flex: 1}}>
                        <StatusBar
                            backgroundColor="#2980b9"
                            translucent={false}
                        />
                        <RootNavigator/>
                    </View>
                </PersistGate>
            </Provider>
        );
    }
}