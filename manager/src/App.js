import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import ReduxThunk from "redux-thunk";

class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
