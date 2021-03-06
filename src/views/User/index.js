import React, { Component } from 'react';
import {NativeModules,Platform} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {pxToDp ,ifIphoneX} from '../../utils';


const statusHeight = ifIphoneX();
 	class User extends Component {
		render() {
			return (
				<Container>
					{/* <Header/> */}
					<Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: statusHeight, paddingHorizontal: 10}}>
						<Button dark block onPress= {() =>{ Actions.Cart();}} >
								<Text> User </Text>
							</Button>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
						<Text style={{fontSize: pxToDp(24),lineHeight:pxToDp(28)}}> User </Text>
					</Content>
				</Container>
			);
	}
}

export default User;
