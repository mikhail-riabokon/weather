import React from 'react';
import './index.css';

function UserPicture(props) {
  const style = {};

  if (props.pictureUrl) {
    style.backgroundImage = `url(${props.pictureUrl})`;
  }

  return (
    <div className="user-picture" style={style}></div>
  )
}

export default UserPicture;
