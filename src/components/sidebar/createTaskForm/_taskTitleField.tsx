import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskTitleField: FC<ITextField> = ({
  // this 2 default values so our ts don't throw error
  onChange = (e) => console.log(e),
  disabled = false,
}): ReactElement => {
  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      // placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
