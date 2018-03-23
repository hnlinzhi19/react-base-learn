/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import allReducers from './src/reducers/index.js';
import App from './src/App.js';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Expo from "expo";
const store = createStore(allReducers, applyMiddleware(thunk));

export default class NativeBaseRedux extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <View><Text>Loading</Text></View>
    }
    return (
      <Provider store= {store}>
      <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('NativeBaseRedux', () => NativeBaseRedux);
