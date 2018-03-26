import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import {pxToDp} from '../utils'

const styles = StyleSheet.create({
  buttonStyle:{
    width: pxToDp(150),
  }
});

export default class HomeNav extends Component{
  render(){
    return (
      <Button style={styles.buttonStyle} vertical>
          <Icon name='arrow-back' />
          <Text>tests</Text>
      </Button>
    );
  }
}