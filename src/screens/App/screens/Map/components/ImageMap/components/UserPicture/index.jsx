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

UserPicture.propTypes = {
  pictureUrl: React.PropTypes.string,
};

export default UserPicture;
