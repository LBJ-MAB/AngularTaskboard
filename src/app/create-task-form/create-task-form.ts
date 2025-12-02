import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ITask } from '../Interfaces/ITask';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task-service';


@Component({
  selector: 'app-create-task-form',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './create-task-form.html',
  styleUrl: './create-task-form.css',
})
export class CreateTaskForm {

  taskTitle: string = '';
  dueDate: string = '';
  description? : string;
  priority? : number | null = null;

  constructor(private taskService: TaskService) {}

  handleCancelClick() : void {
    this.clearInputs();
  }

  handlePrioritySelected(optionValue: string) {
    let value = parseInt(optionValue);
    this.priority = value === 0 ? null : value;
  }

  handleSubmitClick() : void {
    let task: ITask = {
      title: this.taskTitle,
      dueDate: this.dueDate,
      id: Guid.create().toString(),
      isComplete: false,
      description: this.description,
      priority: this.priority
    }

    this.taskService.addTask(task);
    this.clearInputs();
  }

  clearInputs() {
    this.taskTitle = '';
    this.dueDate = '';
    this.description = '';
    this.priority = null;
  }
}
