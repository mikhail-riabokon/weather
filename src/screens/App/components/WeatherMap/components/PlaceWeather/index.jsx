import React from 'react';
import './index.css';

function PlaceWeather(props) {
  const onClick = (event) => {
    props.toogileWatherDetailsModalWindow({
      isOpen: true,
      details: props,
    });
  };

  return (
    <div className="place-weather" onClick={onClick}>
      <i className="fa fa-flag" aria-hidden="true"></i>
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
