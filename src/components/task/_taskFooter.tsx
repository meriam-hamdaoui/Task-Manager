import React, { FC, ReactElement } from 'react';
import {
  Box,
  Switch,
  FormControlLabel,
  Button,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

export const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      mt={4}
    >
      <FormControlLabel
        control={
          <Switch
            color="warning"
            onChange={onStatusChange}
          />
        }
        label="In Progress"
      />

      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{ color: 'white' }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};
