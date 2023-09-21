import React, { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { createTaskBox } from '../../../theme/cssObject';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box sx={createTaskBox}>
      <Typography variant="h6" component={'h2'} mb={2}>
        Create A Task
      </Typography>
      {/* the stack component helps to add a simple spacing between our component */}
      <Stack sx={{ width: '100%' }} spacing={2}>
        {/* task title */}
        <TaskTitleField />
        {/* task description */}
        <TaskDescriptionField />
      </Stack>
      {/* task date */}
      <TaskDateField />
      {/* task selector : priority + progress */}
      {/* form button */}
    </Box>
  );
};
