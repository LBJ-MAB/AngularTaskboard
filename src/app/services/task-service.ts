import { Injectable } from '@angular/core';
import {ITask} from '../Interfaces/ITask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksList: ITask[] = [];

  getTasks() : ITask[] {
    return this.tasksList;
  }

  addTask(task: ITask) : void {
    this.tasksList.push(task);
  }

  deleteTask(taskId: string) {
    this.tasksList = this.tasksList.filter(t => t.id !== taskId);
  }

  toggleComplete(taskId: string) {
    let taskToToggle = this.tasksList.find(t => t.id === taskId)!;
    taskToToggle.isComplete = !taskToToggle.isComplete;
  }
}
