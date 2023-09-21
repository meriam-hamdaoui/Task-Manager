import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import { dashboardSX } from '../../theme/cssObject';
import { Profile } from './Profile';
import { CreateTaskForm } from './createTaskForm/CreateTaskForm';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={dashboardSX}>
      <Profile name="Mariem" />
      <CreateTaskForm />
    </Grid>
  );
};
