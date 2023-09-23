import React, { FC, ReactElement } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';
export const TaskDateField: FC<IDateField> = ({
  value = new Date(),
  disabled = false,
  onChange = (date) => console.log(date),
}): ReactElement => {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          disabled={disabled}
          slots={{
            textField: (params) => (
              <TextField {...params} />
            ),
          }}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
