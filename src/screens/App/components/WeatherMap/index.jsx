import React from 'react';
import { connect } from 'react-redux';
import { filteredResultsSelector } from '../../../../selectors';

class WeatherMap extends React.Component {
  render() {
    return (
      <div>
        <h1>WeatherMap</h1>
        <pre>
          { JSON.stringify(this.props.filteredPlaces, null, 4) }
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredPlaces: filteredResultsSelector(state),
});

export default connect(mapStateToProps)(WeatherMap);
