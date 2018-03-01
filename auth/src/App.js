import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBM-a620FOBwSHSjWrfeV_cJjYEDXiwTDY',
    authDomain: 'auth-e8e57.firebaseapp.com',
    databaseURL: 'https://auth-e8e57.firebaseio.com',
    projectId: 'auth-e8e57',
    storageBucket: 'auth-e8e57.appspot.com',
    messagingSenderId: '864429669522'
  });
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication"/>
        <Text>Hey Corey</Text>
      </View>
    );
  }
}

export default App;
