import React, { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import { taskCounterGrid } from '../../theme/cssObject';
import { TaskCounter } from '../taskCounter/TaskCounter';
import { TaskCard } from 'components/task/TaskCard';
export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={2} my={4}>
      {/* header container */}
      <Box mb={8} px={4}>
        <Typography variant="h6" component={'h2'}>
          Status Of Your Tasks As On :{' '}
          {format(new Date(), 'PPP')}
        </Typography>
      </Box>
      {/* tasks container */}
      <Grid
        container
        display={'flex'}
        justifyContent={'center'}
      >
        {/* task status and counter */}
        <Grid item sx={taskCounterGrid} md={10} xs={12}>
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        {/* tasks */}
        <Grid
          item
          display={'flex'}
          flexDirection={'column'}
          xs={10}
          md={8}
        >
          <Box>
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
