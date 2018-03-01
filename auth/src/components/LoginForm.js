import React, { Component } from 'react';
import  { Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {
  state = { email: "", password: "" };
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


        <CardSection>
          <Button> Log in </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {

  }
};

export default LoginForm;
