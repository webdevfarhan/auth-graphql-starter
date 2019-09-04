import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';

class SignupForm extends Component {
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
