import React from 'react';
import { connect } from 'react-redux';
import FilterByPlace from './components/FilterByPlace';
import FilterByDate from './components/FilterByDate';
import { placesSelector } from '../../../../selectors';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: '',
      date: '',
    };

    this.setPlace = this.setPlace.bind(this);
    this.setDate = this.setDate.bind(this);
  }

  setDate(date) {
    this.setState({ date });
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
          <FilterByDate onDateSelected={ this.setDate } />
        </div>
        <div>
          Looking weather in { this.state.place } on { this.state.date }
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
