import { Typeahead } from 'react-typeahead';
import React from 'react';
import './index.css';

function FilterByPlace(props) {
  const onKeyUp = (event) => {
    if (event.currentTarget.value === '') {
      props.onPlaceSelected('');
    }
  };

  const options = {
    onOptionSelected: props.onPlaceSelected,
    options: props.places,
    placeholder: 'some place',
    maxVisible: 10,
    customClasses: {
      input: 'form-control',
    },
    onKeyUp,
  };

  return (
    <div className="filter-by-place filter-item">
      <Typeahead { ...options }  />
    </div>
  );
}

FilterByPlace.propTypes = {
  places: React.PropTypes.array.isRequired,
  onPlaceSelected: React.PropTypes.func.isRequired,
};

export default FilterByPlace;
