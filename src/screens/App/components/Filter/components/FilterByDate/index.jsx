import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function FilterByDate(props) {
  const options = {
    selected: moment(props.selected),
    onChange: props.onDateSelected,
  };

  return (
    <div>
      <DatePicker {...options} />
    </div>
  );
}

FilterByDate.propTypes = {
  selected: React.PropTypes.number.isRequired,
  onDateSelected: React.PropTypes.func.isRequired,
};

export default FilterByDate;
