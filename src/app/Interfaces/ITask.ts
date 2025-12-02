export interface ITask {
  id: string,
  title: string;
  isComplete: boolean;
  dueDate: string;
  description?: string;
  priority?: number | null;
}
