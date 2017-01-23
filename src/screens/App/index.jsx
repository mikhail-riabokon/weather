import React from 'react';
import { Link } from 'react-router';

class AppScreen extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>App</h1>
        <Link to="/map">Map</Link><br />
        <Link to="/login">Login</Link>
        { this.props.children }
      </div>
    );
  }
}

export default AppScreen;
