import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function FilterByDate(props) {
  const options = {
    onChange: (selectedDate) => {
      const dateFormat = 'YYYY-MM-DD HH:mm:ss';

      props.onDateSelected(selectedDate.format(dateFormat));
    },
  };

  return (
    <div>
      <DatePicker {...options} />
    </div>
  );
}

FilterByDate.propTypes = {
  onDateSelected: React.PropTypes.func.isRequired,
};

export default FilterByDate;
