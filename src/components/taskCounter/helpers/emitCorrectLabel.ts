import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from 'components/sidebar/createTaskForm/enums/Status';
export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.TODO:
      return `Todo's`;
    case Status.IN_PROGRESS:
      return 'In Progress';
    case Status.COMPLETED:
      return 'Completed';
  }
};
