import React from 'react';
import { connect } from 'react-redux';
import { filteredResultsSelector } from '../../../../selectors';


class WeatherMap extends React.Component {
  render() {


    return (
      <h1>WeatherMap</h1>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredPlaces: filteredResultsSelector(state),
});

export default connect(mapStateToProps)(WeatherMap);
