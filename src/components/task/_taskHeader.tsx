import React, { FC, ReactElement } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const TaskHeader: FC<ITaskHeader> = ({
  title = 'default title',
  date = new Date(),
}): ReactElement => {
  return (
    <Box
      display={'flex'}
      width={'100%'}
      justifyContent={'space-between'}
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
