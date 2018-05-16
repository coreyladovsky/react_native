import _ from 'lodash';
import React from "react";
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from "./common";
import { Text } from "react-native";
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends React.Component {
  componentWillMount() {
      _.each(this.props.employee, (value, prop) => {
        this.props.employeeUpdate({ prop, value});
      });
  }

  onButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <Text style={{ paddingTop: 50 }} />
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Chages
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
