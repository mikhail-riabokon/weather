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
  toogileWatherDetailsModalWindow: React.PropTypes.func.isRequired,
};

export default PlaceWeather;
