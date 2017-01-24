import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../../../../actions/user';
import * as authActions from '../../../../actions/auth';
import UnSupportableMessage from './components/UnSupportableMessage';
import ImageMap from './components/ImageMap';
import LocationError from './components/LocationError';

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

  get imageMap() {
    const { geolocation } = this.props.user;
    const isLocationEmpty = (Object.keys(geolocation).length === 0);

    return ((isLocationEmpty || geolocation.error))
      ? <LocationError getUserLocation={this.props.userActions.getUserLocation} />
      : <ImageMap user={this.props.user} />
  }

  render() {
    const childItem = this.isSupportNavigation
      ? this.imageMap
      : <UnSupportableMessage />

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
