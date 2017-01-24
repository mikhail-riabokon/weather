import React from 'react';
import GoogleMap from 'google-map-react';
import UserPicture from './components/UserPicture';
import './index.css';

function ImageMap(props) {
  const bootstrapURLKeys = {
    key: 'AIzaSyCEg2rGFn2wDEv7n8FIrHeqADtg920ZzZc',
    language: 'en',
  };
  const { latitude, longitude } = props.user.geolocation;
  const cords = { lat: latitude, lng: longitude };

  return (
    <div className="map">
      <GoogleMap bootstrapURLKeys={bootstrapURLKeys} defaultCenter={cords} defaultZoom={9}>
        <UserPicture {...cords} pictureUrl={props.user.picture.url} />
      </GoogleMap>
    </div>
  );
}

ImageMap.propTypes = {
  user: React.PropTypes.shape({
    picture: React.PropTypes.shape({
      url: React.PropTypes.string,
    }),
  }),
  geolocation: React.PropTypes.shape({
    latitude: React.PropTypes.number.isRequired,
    longitude: React.PropTypes.number.isRequired,
  }),
};

export default ImageMap;
