// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene, Stack,Tabs } from 'react-native-router-flux';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';
import CommonFooter from './components/CommonFooter';

import Home from './views/Home';
import User from './views/User';
import Cart from './views/Cart';
import Classify from './views/Product/classify';
import {pxToDp} from './utils';

class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      Home: 'ios-home',
      Classify: 'ios-list-box',
      Cart: 'ios-cart',
      User: 'ios-person'
    }
  }
  render(){
    const {
      tabBarLabel,
      focused,
      title,
    } = this.props;
    const nowIcon = this.state[title] + (focused ? '' : '-outline');
    return <Icon name={nowIcon} style={styles.tabIcon} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'transparent', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon:{
    fontSize: pxToDp(50), 
    color: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#313131',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#666',
  },
  labelStyle:{
    color:'#fff',
    fontSize: pxToDp(24),
    lineHeight: pxToDp(32),
    fontWeight: 'bold'
  }
});

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar >
        <Stack key="root">
          <Scene tabs key="index" tabBarComponent={CommonFooter} swipeEnabled showLabel initial labelStyle={styles.labelStyle} tabBarStyle={styles.tabBarStyle} activeBackgroundColor="#4ac600" inactiveBackgroundColor="#313131">
            <Scene key="Home" component={Home} type="push" title="Home" hideNavBar tabBarLabel="持家有道" icon={TabBar}  />
            <Scene key="Classify" component={Classify} type="push" title="Classify" hideNavBar tabBarLabel="分类" icon={TabBar} />
            <Scene key="User" component={User} type="push" title="User" hideNavBar tabBarLabel="我的" icon={TabBar} />
          </Scene>          
          <Scene key="Cart" component={Cart} type="push" title="Cart" hideTabBar hideNavBar  tabBarLabel="购物车" icon={TabBar} />
        </Stack>
        {/* <Stack key="product">
          <Scene key="User" component={User} type="push" title="User" hideNavBar tabBarLabel="我的" icon={TabBar} />          
        </Stack> */}
      </Router>
    );
  }
}
