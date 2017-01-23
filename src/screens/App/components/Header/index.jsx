import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../../actions/auth';
import './index.css';

function Header(props) {
  return (
    <div className="row header">
      <div className="col-xs-12">
        <h4 className="text-right">
          <span className="username">Welcome user</span>
          <i className="fa fa-sign-out" aria-hidden="true" onClick={props.logOut}></i>
        </h4>
      </div>
    </div>
  )
}

Header.propTypes = {
  logOut: React.PropTypes.func.isRequired,
};

export default connect(null, authActions)(Header);
