import {Component, Input} from '@angular/core';
import {Task} from '../taskboard-task/task';
import {ITask} from '../../Interfaces/ITask';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-taskboard-tasks-list',
  imports: [Task, NgClass],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TaskboardTasksList {

  displayTasksStatus: any = {
    all: true,
    complete: false,
    incomplete: false
  }
  tasksList : ITask[] = [
    {
      id: 1,
      title: "make angular app",
      isComplete: false,
      dueDate: "14-12-25"
    },
    {
      id: 2,
      title: "drink coffee",
      isComplete: false,
      dueDate: "01-12-25"
    }
  ];
  displayedTasksList: ITask[] = [...this.tasksList];

  getCompleteTasksOnly(): void {
    this.displayedTasksList = this.tasksList.filter(t => t.isComplete);
    this.displayTasksStatus = {
      all: false,
      complete: true,
      incomplete: false
    }
  }

  getIncompleteTasksOnly(): void {
    this.displayedTasksList = this.tasksList.filter(t => !t.isComplete);
    this.displayTasksStatus = {
      all: false,
      complete: false,
      incomplete: true
    }
  }

  getAllTasks(): void {
    this.displayedTasksList = this.tasksList;
    this.displayTasksStatus = {
      all: true,
      complete: false,
      incomplete: false
    }
  }

  toggleComplete(taskId: number) : void {
    let taskToToggle = this.tasksList.find(t => t.id === taskId)!;
    taskToToggle.isComplete = !taskToToggle?.isComplete;
    this.refreshDisplayedTasksList();
  }

  deleteTask(taskId: number) : void {
    this.tasksList = this.tasksList.filter(t => t.id !== taskId);
    this.refreshDisplayedTasksList();
  }

  refreshDisplayedTasksList() {
    if (this.displayTasksStatus.complete) {
      this.displayedTasksList = this.tasksList.filter(t => t.isComplete);
    } else if (this.displayTasksStatus.incomplete) {
      this.displayedTasksList = this.tasksList.filter(t => !t.isComplete);
    } else {
      this.displayedTasksList = this.tasksList;
    }
  }
}
