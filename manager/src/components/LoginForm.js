import React from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import emailChanged from '../actions';

class LoginForm extends React.Component {
  onEmailchange(text) {
    this.props.emailChanged(text);
  }

  render () {
    return(
      <Card>
        <CardSection>
        <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)}/>
        </CardSection>

        <CardSection>
        <Input secureTextEntry label="Password" placeholder="********"/>

        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {

};

export default connect(null, { emailChanged })(LoginForm);
