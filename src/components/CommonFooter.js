import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon ,Badge} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {pxToDp} from '../utils';


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
  },
  footerStyle:{
    backgroundColor: '#333'
  },
  nowButtonStyle:{
    borderRadius: 0,
    backgroundColor: '#313131',
  },
  activeButtonStyle:{
    borderRadius: 0,
    backgroundColor: '#4ac600'
  }
});

export default class FooterTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: 'Home',
      buttonList: [
        {
          title: '持家有道',
          focused: false,
          icon: 'ios-home',
          name: 'Home'
        },
        {
          title: '分类',
          focused: false,
          icon: 'ios-list-box',
          name: 'Classify'
        },
        {
          title: '购物车',
          focused: false,
          icon: 'ios-cart',
          name: 'Cart'
        },
        {
          title: '我的',
          focused: false,
          icon: 'ios-person',
          name: 'User'
        },
      ]
    };
  }
  componentWillMount(){
    this.setState({
      currentScene: Actions.currentScene,
    })
  }
  render() {
    console.log(Actions.currentScene, 'test');
    const currentScene = Actions.currentScene.replace('_','');
    const currentButonList = this.state.buttonList.map((v) => {
      const tmp = Object.assign(v,{focused: false});
      if (v.name === currentScene) {
        tmp.focused = true;
      }
      return tmp;
    });
    return (
      <Footer style={styles.footerStyle}>
        <FooterTab>
          {
            currentButonList.map((v) => <Button key={v.name} vertical active={v.focused} onPress= {() =>{Actions[v.name]();}} style={!v.focused ? styles.nowButtonStyle : styles.activeButtonStyle}  >
                <Icon name={v.icon + (v.focused ? '':'-outline')} style={styles.tabIcon} />
                <Text style={styles.labelStyle}>{v.title}</Text>
              </Button>)
          }
        </FooterTab>
      </Footer>
    );
  }
}