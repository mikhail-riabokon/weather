import React from 'react';
import GoogleMap from 'google-map-react';
import './index.css';

function UserPicture() {
  const style = {
    width: 50,
    height: 50,
    backgroundColor: '#000',
  }

  return (
    <div style={style}></div>
  )
}

function ImageMap(props) {
  const bootstrapURLKeys = {
    key: 'AIzaSyCEg2rGFn2wDEv7n8FIrHeqADtg920ZzZc',
    language: 'en',
  };

  const center = { lat: 59.938043, lng: 30.337157 };

  return (
    <div className="map">
      <GoogleMap bootstrapURLKeys={bootstrapURLKeys} defaultCenter={center} defaultZoom={9}>
        <UserPicture lat={59.955413} lng={30.337844} />
      </GoogleMap>
    </div>
  );
}

export default ImageMap;
