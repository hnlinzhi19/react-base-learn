// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene, Stack,Tabs } from 'react-native-router-flux';
import CommonFooter from './components/CommonFooter';

import Home from './views/Home';
import User from './views/User';
import Cart from './views/Cart';
import Classify from './views/Product/classify';

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar >
        <Stack key="root">
          <Scene tabs key="index" tabBarComponent={CommonFooter} showLabel initial >
            <Scene key="Home" component={Home} type="push" title="Home" hideNavBar tabBarLabel="持家有道" />
            <Scene key="Classify" component={Classify} type="push" title="Classify" hideNavBar tabBarLabel="分类" />
            <Scene key="User" component={User} type="push" title="User" hideNavBar tabBarLabel="我的" />
          </Scene>          
          <Scene key="Cart" component={Cart} type="push" title="Cart" hideTabBar hideNavBar  tabBarLabel="购物车" />
        </Stack>
        {/* <Stack key="product">
          <Scene key="User" component={User} type="push" title="User" hideNavBar tabBarLabel="我的" icon={TabBar} />          
        </Stack> */}
      </Router>
    );
  }
}
