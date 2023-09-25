import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import {
  flexColumn,
  counterAvatar,
} from '@theme/cssObject';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '@components/sidebar/createTaskForm/enums/Status';
export const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { count = 0, status = Status.COMPLETED } = props;

  return (
    <>
      <Box sx={flexColumn}>
        <Avatar sx={counterAvatar}>
          <Typography color={'white'} variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color={'white'}
          variant="h4"
          fontWeight={'bold'}
          fontSize={'20px'}
        >
          subtitle
        </Typography>
      </Box>
    </>
  );
};
