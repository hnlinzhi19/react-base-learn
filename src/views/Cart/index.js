import React, { Component } from 'react';
import {NativeModules,Platform} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Icon,Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {pxToDp ,ifIphoneX} from '../../utils';

const statusHeight = ifIphoneX();
 class Cart extends Component {
    render() {
        return (
            <Container>
                 <Header >
                  <Left>
                    <Button transparent onPress= {() =>{Actions.pop();}}>
                      <Icon name='arrow-back' />
                    </Button>
                  </Left>
                  <Body>
                    <Title>Header</Title>
                  </Body>
                  <Right />
                </Header>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: pxToDp(20), paddingHorizontal: 10}}>
                  <Button dark block onPress= {() =>{ Actions.RepoList();}} >
                      <Text> Cart </Text>
                    </Button>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                  <Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> Cart </Text>
                </Content>
            </Container>
        );
    }
}

export default Cart;
