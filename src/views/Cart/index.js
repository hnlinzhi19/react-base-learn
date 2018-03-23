import React, { Component } from 'react';
import {NativeModules,Platform} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {pxToDp ,ifIphoneX} from '../../utils';

const statusHeight = ifIphoneX();
 class Cart extends Component {
    render() {
        return (
            <Container>
                {/* <Header/> */}
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: statusHeight, paddingHorizontal: 10}}>
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
