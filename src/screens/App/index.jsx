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
    const route = isAuthenticated ? 'map' : 'login';

    // router.push(`/${route}`);
    console.log('route', route);
    router.push(`/map`);
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
