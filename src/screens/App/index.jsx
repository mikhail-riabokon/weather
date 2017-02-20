import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import * as weatherActions from '../../actions/weather';
import Filter from './components/Filter';
import WeatherMap from './components/WeatherMap';

class AppScreen extends React.Component {
  componentWillMount() {
    this.props.weatherActions.getInitialState(); //TODO: remove to server side
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Weather in some country</h1>
        <Filter />
        <WeatherMap />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  weatherActions: bindActionCreators(weatherActions, dispatch),
});

export default connect(null, mapDispatchToProps)(AppScreen);
