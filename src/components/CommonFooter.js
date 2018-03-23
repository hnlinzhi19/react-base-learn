import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text,Icon ,Badge} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class FooterTabs extends Component {
  constructor() {
    super();
    this.state = {
      currentScene: 'Home'
    };
  }
  componentWillMount(){
    console.log(Actions.currentScene);
    this.setState({
      currentScene: Actions.currentScene,
    })
  }
  render() {
    return (
      <Footer>
      <FooterTab>
        <Button vertical active={this.state.currentScene === 'Home'} onPress= {() =>{Actions.Home();}} >
          <Icon name="home" />
          <Text>持家有道</Text>
        </Button>
        <Button vertical active={this.state.currentScene === 'Classify'} onPress= {() =>{ Actions.Classify();}} >
          <Icon name="list" />
          <Text>分类</Text>
        </Button>
        <Button active={this.state.currentScene === 'Cart'} badge vertical onPress= {() =>{ Actions.Cart();}} >
          <Badge ><Text>51</Text></Badge>
          <Icon active name="cart" />
          <Text>购物车</Text>
        </Button>
        <Button vertical active={this.state.currentScene === 'User'} onPress= {() =>{ Actions.User();}} >
          <Icon name="person" />
          <Text>我的</Text>
        </Button>
      </FooterTab>
    </Footer>
    );
  }
}