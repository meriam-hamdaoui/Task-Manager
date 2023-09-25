import React, { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { createTaskBox } from '@theme/cssObject';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box sx={{ ...createTaskBox }}>
      <Typography variant="h6" component={'h2'} mb={2}>
        Create A Task
      </Typography>
      {/* the stack component helps to add a simple spacing between our component */}
      <Stack sx={{ width: '100%' }} spacing={2}>
        {/* task title */}
        <TaskTitleField />
        {/* task description */}
        <TaskDescriptionField />
        {/* task date */}
        <TaskDateField />
        <Stack
          direction={'row'}
          sx={{ width: '100%' }}
          spacing={2}
        >
          {/* task selector : priority + progress */}
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              {
                label: Status.TODO.toUpperCase(),
                value: Status.TODO,
              },
              {
                label: Status.IN_PROGRESS.toUpperCase(),
                value: Status.IN_PROGRESS,
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                label: Priority.LOW.toUpperCase(),
                value: Priority.LOW,
              },
              {
                label: Priority.HIGH.toUpperCase(),
                value: Priority.HIGH,
              },
              {
                label: Priority.NORMAL.toUpperCase(),
                value: Priority.NORMAL,
              },
            ]}
          />
        </Stack>
      </Stack>
      {/* form button */}
    </Box>
  );
};
