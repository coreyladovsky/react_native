import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import firebase from 'firebase';

class App extends Component {
  comoponentWillMount() {
    const config = {
      apiKey: "AIzaSyDFDSJY5123e2kwQT-GIPKokMiLhvzCip8",
      authDomain: "manager-c80b6.firebaseapp.com",
      databaseURL: "https://manager-c80b6.firebaseio.com",
      projectId: "manager-c80b6",
      storageBucket: "manager-c80b6.appspot.com",
      messagingSenderId: "624689178885"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
