import React, { FC, ReactElement } from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';
export const TaskSelectField: FC<ISelectField> = (
  props,
): ReactElement => {
  const {
    name = '',
    value = '',
    label = 'Status',
    disabled = false,
    items = [{ label: 'create one', value: '' }],
    onChange = (e: SelectChangeEvent) => console.log(e),
  } = props;

  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((el, index) => (
          <MenuItem key={el.label + index} value={el.value}>
            {el.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.array.isRequired,
};
