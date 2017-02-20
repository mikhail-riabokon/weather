import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import * as weatherActions from '../../actions/weather';

class AppScreen extends React.Component {
  componentWillMount() {
    this.props.weatherActions.getInitialState();
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>My app</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({ weather });
const mapDispatchToProps = (dispatch) => ({
  weatherActions: bindActionCreators(weatherActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
