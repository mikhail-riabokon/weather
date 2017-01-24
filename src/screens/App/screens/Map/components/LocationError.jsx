import React from 'react';

function LocationError(props) {
  return (
    <div>
      <p>Sorry, but we can not procced without your location.</p>
      <p>
        <span onClick={props.getUserLocation}>Please try again</span> <span>if you allow get your location</span>
      </p>
    </div>
  );
}

LocationError.propTypes = {
  getUserLocation: React.PropTypes.func.isRequired,
};

export default LocationError;
