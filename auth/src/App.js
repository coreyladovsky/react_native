import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBM-a620FOBwSHSjWrfeV_cJjYEDXiwTDY",
      authDomain: "auth-e8e57.firebaseapp.com",
      databaseURL: "https://auth-e8e57.firebaseio.com",
      projectId: "auth-e8e57",
      storageBucket: "auth-e8e57.appspot.com",
      messagingSenderId: "864429669522"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch ((this.state.loggedIn)) {
      case true:
        return (
          <Button onPress={()=> firebase.auth().signOut()}>
            Log Out
          </Button>

        )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large"/>;

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
