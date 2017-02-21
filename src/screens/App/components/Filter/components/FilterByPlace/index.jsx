import Autosuggest from 'react-autosuggest';
import React from 'react';
import './index.css';

class FilterByPlace extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: [],
    };

    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSuggestionsFetchRequested({ value }) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const suggestions = this.props.places.filter((place) => {
      return (place.toLowerCase().slice(0, inputLength) === inputValue);
    });

    this.setState({ suggestions });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [] });
  }

  onChange(event, { newValue }) {
    this.props.onPlaceSelected(newValue);
  }

  renderSuggestion(suggestion) {
    return (
      <div>{ suggestion }</div>
    );
  }

  render() {
    const inputProps = {
      value: this.props.selected,
      className: 'form-control',
      placeholder: 'some place',
      onChange: this.onChange,
    };
    const options = {
      onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.onSuggestionsClearRequested,
      renderSuggestion: this.renderSuggestion,
      getSuggestionValue: (value) => value,
      suggestions: this.state.suggestions,
      inputProps,
    };

    return (
      <div className="filter-by-place filter-item">
        <Autosuggest {...options}/>
      </div>
    );
  }
}

FilterByPlace.propTypes = {
  places: React.PropTypes.array.isRequired,
  selected: React.PropTypes.string,
  onPlaceSelected: React.PropTypes.func.isRequired,
};

export default FilterByPlace;
