import React from 'react';
import { connect } from 'react-redux';
import FilterByPlace from './components/FilterByPlace';
import { placesSelector } from '../../../../selectors';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: '',
    };

    this.setPlace = this.setPlace.bind(this);
  }

  setPlace(place) {
    this.setState({ place });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <FilterByPlace
            places={ this.props.places }
            onPlaceSelected={ this.setPlace }
          />
        </div>
        <div>
          Looking weather in { this.state.place }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  places: placesSelector(weather)
});

Filter.propTypes = {
  places: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Filter);
