// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene, Stack,Tabs } from 'react-native-router-flux';
import {StyleSheet} from 'react-native';

import Home from './views/Home';
import User from './views/User';
import Cart from './views/Cart';
import Classify from './views/Product/classify';
import {pxToDp} from './utils';


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#666',
  },
  labelStyle:{
    color:'#fff',
    fontSize: pxToDp(24),
    lineHeight: pxToDp(42),
    fontWeight: 'bold'
  }
});

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
            <Scene key="Home" component={Home} title="Home" hideNavBar={true}  tabBarLabel="持家有道" initial />
            <Scene key="Classify" component={Classify} title="Classify" hideNavBar={true}  tabBarLabel="分类" />
            <Scene key="Cart" component={Cart} title="Cart" hideNavBar={true}  tabBarLabel="购物车" />
            <Scene key="User" component={User} title="User" hideNavBar={true}  tabBarLabel="我的" />
        </Scene>
      </Router>
    );
  }
}
