import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = ({
  // this 2 default values so our ts don't throw error
  onChange = (e) => console.log(e),
  disabled = false,
}): ReactElement => {
  return (
    <TextField
      id="description"
      name="description"
      label="Task Description"
      // placeholder="Task Description"
      variant="outlined"
      size="small"
      fullWidth
      multiline
      rows={5}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
