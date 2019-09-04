import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import mutation from '../mutations/Signup';
import { graphql } from 'react-apollo';

class SignupForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} errors={[]} />
      </div>
    );
  }
}

export default graphql(mutation)(SignupForm);
