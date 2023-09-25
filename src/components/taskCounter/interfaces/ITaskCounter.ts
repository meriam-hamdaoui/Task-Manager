import { Status } from '@components/sidebar/createTaskForm/enums/Status';

export type TaskCounterStatusType =
  | Status.TODO
  | Status.IN_PROGRESS
  | Status.COMPLETED;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
