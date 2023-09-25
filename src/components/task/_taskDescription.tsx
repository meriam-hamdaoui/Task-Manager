import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = ({
  text = `Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Non fugiat ipsam autem, error sit provident
        quo repellendus minima`,
}): ReactElement => {
  return (
    <Box>
      <Typography>{text}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  text: PropTypes.string,
};
