// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene, Stack,Tabs } from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import Welcome from './components/welcome.js';
import Home from './components/home.js';
import About from './components/about.js';
import RepoList from './components/repolist.js';
import RepoInfo from './components/repoinfo.js';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
  labelStyle:{
    color:'#000'
  }
});

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Tabs key="Index" tabBarPosition="bottom" swipeEnabled labelStyle={styles.labelStyle} tabBarStyle={styles.tabBarStyle} activeBackgroundColor="white" activeTintColor="black" inactiveBackgroundColor="rgba(255, 0, 0, 0.5)" >
          {/* <Stack key="Index" tabs={true} hideTabBar titleStyle={{alignSelf: 'center'}}> */}
            <Scene key="Home" component={Home} title="home" hideNavBar={true}  tabBarLabel="home" />
            <Scene key="About" component={About} title="about" hideNavBar={true}  tabBarLabel="about" />
          {/* </Stack> */}
          </Tabs>
          <Scene key="Welcome" component={Welcome} title="Welcome" hideNavBar={true} />
          <Scene key="RepoList" component={RepoList} title="RepoList" hideNavBar={true}  />
          <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" hideNavBar={true}  />
        </Scene>
      </Router>
    );
  }
}
