import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { taskCardBox } from './../../theme/cssObject';
import { TaskHeader } from './_taskHeader';
export const TaskCard: FC = (): ReactElement => {
  return (
    <Box
      width={'100%'}
      sx={{ ...taskCardBox, borderColor: 'error.light' }}
    >
      {/* header */}
      <TaskHeader />
      {/* description */}
      {/* footer */}
    </Box>
  );
};
