import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import WeatherDetailsModalWindow from './components/WeatherDetailsModalWindow';
import * as weatherActions from '../../actions/weather';
import WeatherMap from './components/WeatherMap';
import Filter from './components/Filter';

class AppScreen extends React.Component {
  componentWillMount() {
    this.props.weatherActions.getInitialState(); //TODO: remove to server side
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Weather in Netherlands</h1>
            </div>
          </div>
          <Filter />
          <WeatherMap />
        </div>
        <WeatherDetailsModalWindow />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  weatherActions: bindActionCreators(weatherActions, dispatch),
});

export default connect(null, mapDispatchToProps)(AppScreen);
