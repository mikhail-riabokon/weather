import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../../actions/auth';
import './index.css';

function Header(props) {
  const name = props.user.name || null;

  return (
    <div className="row header">
      <div className="col-xs-12">
        <h4 className="text-right">
          <span className="username">Welcome {name}</span>
          <i className="fa fa-sign-out" aria-hidden="true" onClick={props.logOut}></i>
        </h4>
      </div>
    </div>
  );
}

Header.propTypes = {
  logOut: React.PropTypes.func.isRequired,
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, authActions)(Header);
