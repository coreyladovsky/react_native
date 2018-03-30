import React, { Component } from 'react';
import { Text } from 'react-native';
import  { Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';


class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress() {
    const { email, password } = this.state
    this.setState({ error: "", loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  }

  onLoginFail() {
    this.setState({ "Authentication Failed!", loading: false})
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />
    } else {
      return(
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
      )
    }
  }


  render() {
    return(
      <Card>
        <CardSection>
          <Input
          placeholder = "user@gmail.com"
          label="Email"
          vale={ this.state.email }
          onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
          secureTextEntry
          placeholder = "*******"
          label="Password"
          vale={ this.state.password }
          onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: 'red'

  }
};

export default LoginForm;
