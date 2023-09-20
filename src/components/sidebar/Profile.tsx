import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { avatarSX } from '../../theme/cssObject';

export const Profile: FC = (): ReactElement => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Avatar sx={avatarSX}>
        <Typography variant="h4" color={'text.primary'}>
          M
        </Typography>
      </Avatar>
      <Typography variant="h6" color={'text.primary'}>
        Welcome, Maya
      </Typography>
      <Typography variant="body1" color={'text.primary'}>
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};
