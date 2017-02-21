import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import React from 'react';
import { filteredResultsSelector } from '../../../../selectors';
import PlaceWeather from './components/PlaceWeather';

const NETHERLAND_CORDS = {
  lat: 51.8937201,
  lng: 4.3921683,
};

function renderPlaceWeath(place, index) {
  const cords = {
    lat: place.latitude,
    lng: place.longitude,
  };

  return <PlaceWeather key={ index } { ...cords } { ...place } />;
}

function WeatherMap(props) {
  const bootstrapURLKeys = {
    key: 'AIzaSyCEg2rGFn2wDEv7n8FIrHeqADtg920ZzZc',
    language: 'en',
  };
  const googleMapOptions = {
    defaultCenter: NETHERLAND_CORDS,
    defaultZoom: 7,
    bootstrapURLKeys,
  };

  return (
    <div style={{ height: 800 }}>
      <GoogleMap {...googleMapOptions}>
        { props.filteredPlaces.map(renderPlaceWeath) }
      </GoogleMap>
    </div>
  );
}

WeatherMap.propTypes = {
  filteredPlaces: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  filteredPlaces: filteredResultsSelector(state),
});


export default connect(mapStateToProps)(WeatherMap);
