import React, { FC, ReactElement } from 'react';
import { Grid, Typography } from '@mui/material';
import { dashboardSX } from '../../theme/cssObject';
import { Profile } from './Profile';

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid item md={4} sx={dashboardSX}>
      <Profile />
      <Typography variant="h4">
        placeholder for form
      </Typography>
    </Grid>
  );
};
