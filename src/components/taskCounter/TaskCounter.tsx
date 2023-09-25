import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { flexColumn, counterAvatar } from 'theme/cssObject';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from 'components/sidebar/createTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';
export const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { count = 0, status = Status.COMPLETED } = props;

  return (
    <>
      <Box sx={flexColumn}>
        <Avatar
          sx={{
            ...counterAvatar,
            borderColor: `${emitCorrectBorderColor(
              status,
            )}`,
          }}
        >
          <Typography color={'white'} variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color={'white'}
          variant="h4"
          fontWeight={'bold'}
          fontSize={'20px'}
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.COMPLETED,
    Status.IN_PROGRESS,
    Status.TODO,
  ]),
};
