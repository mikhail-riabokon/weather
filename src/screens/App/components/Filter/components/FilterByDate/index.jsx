import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import React from 'react';

function FilterByDate(props) {
  const onDateChanged = (selectedDate) => {
    if (selectedDate) {
      props.onDateSelected(selectedDate.valueOf());
    }
  };

  const options = {
    selected: moment(props.selected),
    onChange: onDateChanged,
    className: 'form-control',
  };

  return (
    <div className="filter-by-date filter-item">
      <DatePicker {...options} />
    </div>
  );
}

FilterByDate.propTypes = {
  selected: React.PropTypes.number.isRequired,
  onDateSelected: React.PropTypes.func.isRequired,
};

export default FilterByDate;
