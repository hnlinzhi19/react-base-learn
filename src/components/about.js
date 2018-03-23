import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class About extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
                  <Button dark block onPress= {() =>{ Actions.RepoList();}} style= {{marginTop: 40}}>
                      <Text> About </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default About;
