import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../../actions/auth';

class LoginScreen extends React.Component {
  render() {
    return (
      <h1 onClick={this.props.loginViaFacebook}>Login</h1>
    );
  }
}

export default connect(null, authActions)(LoginScreen);
