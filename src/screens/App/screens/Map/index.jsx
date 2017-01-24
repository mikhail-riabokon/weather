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

      if (this.isSupportNavigation) {
        this.props.userActions.getUserLocation();
      }
    }
  }

  get isSupportNavigation() {
    return ('geolocation' in navigator );
  }

  get locationError() {
    return (
      <div>
        <p>Sorry, but we can not procced without your location.</p>
        <p><a href="#" onClick={this.props.userActions.getUserLocation}>Please try again</a> if you allow get your location</p>
      </div>
    );
  }

  get map() {
    return (
      <div>
        <h1>place for map</h1>
      </div>
    );
  }

  get unSupportableMessage() {
    return (
      <p>Unfortunately, your browser is too old, try to update it or download the latest one</p>
    );
  }

  get imageMap() {
    const isLocationEmpty = (Object.keys(this.props.user.geolocation).length === 0);

    return ((isLocationEmpty || this.props.user.geolocation.error))
      ? this.locationError
      : this.map;
  }

  render() {
    const childItem = this.isSupportNavigation
      ? this.imageMap
      : this.unSupportableMessage

    return (
      <div>
        <h1>Map</h1>
        { childItem }
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
