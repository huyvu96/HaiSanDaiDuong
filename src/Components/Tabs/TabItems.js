import * as React from 'react';
import { Platform,StyleSheet, Dimensions, View, Animated, Text, TouchableWithoutFeedback,Image,ImageBackground } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import global from '../../Styles/global'; 
import PropTypes from "prop-types";

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
export default class TabItems extends React.Component<*, State> {
  state = {
    index: this.props.index,
    routes: this.props.routes
  };
  _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? global.colorTextPrimary : global.colorA5)
    );
    const outputFont = inputRange.map(
      inputIndex => (inputIndex === index ? global.fontBold : global.fontSemiBold)
    );
    const color  = position.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };
  _renderHeader = props => (
    <TabBar
      {...props}
      scrollEnabled={true}
      renderLabel={this._renderLabel(props)}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
    />
  );
  render() {
    const{renderScene, onIndexChange,index, routes} = this.props;
    return (
          <TabViewAnimated
            style={[styles.container, this.props.style]}
            navigationState={this.props}
            renderScene={renderScene}
            renderHeader={this._renderHeader}
            onIndexChange={onIndexChange}
            initialLayout={initialLayout}
          />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: global.colorF4,
    overflow: 'hidden',
    //height: undefined,
   justifyContent:'center',
  },
  tab: {
      width:120,
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'red',
   // height: undefined
  },
  indicator: {
    backgroundColor: global.colorTextPrimary,
    height:3,
   // width: 65,
   //padding:5,
    //margin: Platform.OS === 'ios' ?  5 : 10,
   //left:8,right:8,
   // maxWidth:65,
    //left:8,
    justifyContent:'center',
    alignSelf:'center',
  },
  label: {
    fontSize: global.sizeP18,
    fontFamily: global.fontRegular,
    color: global.colorTextPrimary,
    //fontWeight:'600'
  },
});
TabItems.defaultProps = {
  
};
TabItems.propTypes = {
  renderScene : PropTypes.func,
  onIndexChange : PropTypes.func,
  index: PropTypes.number,
  routes: PropTypes.array,
  style: PropTypes.object
};
