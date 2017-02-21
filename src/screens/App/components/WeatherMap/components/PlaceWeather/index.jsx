import React from 'react';
import './index.css';

function PlaceWeather(props) {
  const onClick = (event) => {
    console.log('do somethigs');

    // props.showPlaceWeather(props);
  };

  return (
    <div className="place-weather" onClick={onClick}>
      <span className="glyphicon glyphicon-flag" aria-hidden="true"></span>
    </div>
  );
}

PlaceWeather.propTypes = {
  precipitation_probability: React.PropTypes.string.isRequired,
  precipitation_mm: React.PropTypes.string.isRequired,
  temperature_max: React.PropTypes.string.isRequired,
  temperature_min: React.PropTypes.string.isRequired,
  place_name: React.PropTypes.string.isRequired,
};

export default PlaceWeather;
