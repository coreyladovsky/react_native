import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm/>
      </View>
    );
  }
}

export default App;
