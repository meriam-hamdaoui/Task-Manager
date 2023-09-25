import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { taskCardBox } from './../../theme/cssObject';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from 'components/sidebar/createTaskForm/enums/Status';
import { Priority } from 'components/sidebar/createTaskForm/enums/Priority';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
export const TaskCard: FC<ITask> = (
  props,
): ReactElement => {
  const {
    title = 'Title test',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet',
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
    priority = Priority.NORMAL,
    status = Status.COMPLETED,
  } = props;

  return (
    <Box
      width={'100%'}
      sx={{
        ...taskCardBox,
        borderColor: `${renderPriorityBorderColor(
          priority,
        )}`,
      }}
    >
      {/* header */}
      <TaskHeader title={title} date={date} />
      {/* description */}
      <TaskDescription description={description} />
      {/* footer */}
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};
