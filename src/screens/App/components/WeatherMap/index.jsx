import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import { filteredResultsSelector } from '../../../../selectors';

const NETHERLAND_CORDS = {
  lat: 51.8937201,
  lng: 4.3921683,
};

function ListItem(props) {
  const styles = {
    height: 10,
    width: 10,
    backgroundColor: '#000',
    borderRadius: '50%',
  };

  return (
    <div style={ styles }></div>
  );
}

class WeatherMap extends React.Component {
  render() {
    const bootstrapURLKeys = {
      key: 'AIzaSyCEg2rGFn2wDEv7n8FIrHeqADtg920ZzZc',
      language: 'en',
    };

    return (
      <div style={{ height: 800 }}>
        <GoogleMap
          bootstrapURLKeys={bootstrapURLKeys}
          defaultCenter={NETHERLAND_CORDS}
          defaultZoom={7}
        >
          { this.props.filteredPlaces.map((place, index) => {
            return <ListItem key={index} lat={place.latitude} lng={place.longitude} {...place} />
          }) }
        </GoogleMap>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredPlaces: filteredResultsSelector(state),
});

export default connect(mapStateToProps)(WeatherMap);
