import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { avatarSX } from '../../theme/cssObject';
import PropTypes from 'prop-types';

// typescript checking only on compiler time
interface IProfile {
  name: string;
}

export const Profile: FC<IProfile> = ({
  name,
}): ReactElement => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Avatar sx={avatarSX}>
        <Typography variant="h4" color={'text.primary'}>
          {`${name.substring(0, 1).toUpperCase()}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color={'text.primary'}>
        Welcome, {name}
      </Typography>
      <Typography variant="body1" color={'text.primary'}>
        This is your personal tasks manager
      </Typography>
    </Box>
  );
};

// prop-types check on runtime, it's a double checking along with typescript
Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
