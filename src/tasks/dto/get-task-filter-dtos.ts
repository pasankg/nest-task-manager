import { TaskStatus } from '../tasks.model';

export class GetTaskFilterDto {
  // ? is to mark this is an optional parameter.
  status?: TaskStatus;
  search?: string;
}
