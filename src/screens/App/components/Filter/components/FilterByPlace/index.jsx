import { Typeahead } from 'react-typeahead';
import React from 'react';

function FilterByPlace(props) {
  const onKeyUp = (event) => {
    if (event.currentTarget.value === '') {
      props.onPlaceSelected('');
    }
  };

  const options = {
    onOptionSelected: props.onPlaceSelected,
    options: props.places,
    placeholder: 'Place',
    maxVisible: 10,
    onKeyUp,
  };

  return (
    <div className="filter-by-name">
      <Typeahead { ...options }  />
    </div>
  );
}

FilterByPlace.propTypes = {
  places: React.PropTypes.array.isRequired,
  onPlaceSelected: React.PropTypes.func.isRequired,
};

export default FilterByPlace;
