import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../../actions/user';
import * as authActions from '../../../../actions/auth';

class MapScreen extends React.Component {
  componentWillMount() {
    this.checkUserData();
  }

  checkUserData() {
    if (Object.keys(this.props.user).length === 0) {
      this.props.userActions.fetchUserData();
    }
  }

  render() {
    return (
      <div>
        <h1>Map</h1>
        <h2 onClick={this.props.authActions.logOut}>LOg out</h2>
        <div>
          {JSON.stringify(this.props.user, null, 4) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(authActions, dispatch),
  userActions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
