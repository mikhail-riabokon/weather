import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../../actions/auth';
import './index.css';

function LoginScreen(props) {
  return (
    <div className="row login">
      <div className="col-xs-12 col-sm-6 col-sm-offset-3">
        <div className="row">
          <div className="col-xs-12">
            <h1>Images map</h1>
          </div>
          <div className="col-xs-12">
            <button
              className="btn btn-block btn-lg btn-social btn-facebook"
              onClick={props.loginViaFacebook}>
               <span className="fa fa-facebook"></span> Sign in with Facebook
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginScreen.propTypes = {
  loginViaFacebook: React.PropTypes.func.isRequired,
};

export default connect(null, authActions)(LoginScreen);
