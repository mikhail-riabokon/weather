import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import * as filterActions from '../../../../actions/filter';
import { placesSelector } from '../../../../selectors';
import FilterByPlace from './components/FilterByPlace';
import FilterByDate from './components/FilterByDate';

function Filter(props) {
  return (
    <div className="row">
      <div className="col-xs-12">
        <FilterByPlace
          places={ props.places }
          onPlaceSelected={ props.filterActions.setPlace }
        />
        <FilterByDate
          selected={ props.filter.date }
          onDateSelected={ props.filterActions.setDate }
        />
      </div>
    </div>
  );
}

Filter.propTypes = {
  places: React.PropTypes.array.isRequired,
  filter: React.PropTypes.shape({
    place: React.PropTypes.string,
    date: React.PropTypes.number.isRequired,
  }).isRequired,
  filterActions: React.PropTypes.shape({
    setPlace: React.PropTypes.func.isRequired,
    setDate: React.PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  places: placesSelector(state.weather),
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  filterActions: bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
