import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import React from 'react';
import * as filterActions from '../../../../actions/filter';
import { placesSelector } from '../../../../selectors';
import FilterByPlace from './components/FilterByPlace';
import FilterByDate from './components/FilterByDate';
import './index.css';

function Filter(props) {
  const updateUrl = ({ place, date }) => {
    const query = { place, date };

    props.router.push({ pathname: '/', query });
  };

  const selectPlace = (selectedPlace) => {
    updateUrl({ place: selectedPlace });

    props.filterActions.setPlace(selectedPlace);
  };

  return (
    <div className="row filter">
      <div className="col-xs-12">
        Show me
        <FilterByPlace
          places={ props.places }
          selected={ props.filter.place }
          onPlaceSelected={ selectPlace }
        />
        on
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter));
