import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

class AppScreen extends React.Component {
  componentWillMount() {
    this.checkAuth();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      this.checkAuth(nextProps);
    }
  }

  checkAuth(props) {
    const { isAuthenticated, router } = props || this.props;
    const currentLocation = router.getCurrentLocation().pathname.substr(1);
    
    if (isAuthenticated) {
      if (currentLocation !== 'map') {
        router.replace('map');
      }
    } else {
      router.replace('login');
    }
  }

  get header() {
    return this.props.isAuthenticated ? <Header/> : null;
  }

  render() {
    return (
      <div className="container-fluid">
        { this.header }
        <div className="row">
          <div className="container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AppScreen);
