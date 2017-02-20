import React from 'react';
import { Typeahead } from 'react-typeahead';

function FilterByPlace(props) {
  const options = {
    options: props.places,
    placeholder: 'Place',
    maxVisible: 10,
    onOptionSelected: (selectPlace) => {
      props.onPlaceSelected(selectPlace);
    },
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
