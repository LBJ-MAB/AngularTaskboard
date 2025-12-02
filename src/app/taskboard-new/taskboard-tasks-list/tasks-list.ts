import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../taskboard-task/task';
import {ITask} from '../../Interfaces/ITask';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TaskService} from '../../services/task-service';

@Component({
  selector: 'app-taskboard-tasks-list',
  imports: [Task, NgClass, RouterLink],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TaskboardTasksList implements OnInit{

  displayTasksStatus: any = {
    all: true,
    complete: false,
    incomplete: false
  }
  tasksList : ITask[] = [];
  displayedTasksList: ITask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasksList = this.taskService.getTasks();
    this.displayedTasksList = this.taskService.getTasks();
  }

  displayCompleteTasksOnly(): void {
    this.displayedTasksList = this.tasksList.filter(t => t.isComplete);
    this.displayTasksStatus = {
      all: false,
      complete: true,
      incomplete: false
    }
  }

  displayIncompleteTasksOnly(): void {
    this.displayedTasksList = this.tasksList.filter(t => !t.isComplete);
    this.displayTasksStatus = {
      all: false,
      complete: false,
      incomplete: true
    }
  }

  displayAllTasks(): void {
    this.displayedTasksList = this.tasksList;
    this.displayTasksStatus = {
      all: true,
      complete: false,
      incomplete: false
    }
  }

  toggleComplete(taskId: string) : void {
    this.taskService.toggleComplete(taskId);
    this.refreshDisplayedTasksList();
  }

  deleteTask(taskId: string) : void {
    this.taskService.deleteTask(taskId);
    this.tasksList = this.taskService.getTasks();
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
