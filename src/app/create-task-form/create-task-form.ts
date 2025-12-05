import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ITask } from '../Interfaces/ITask';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { TaskService } from '../services/task-service';


@Component({
  selector: 'app-create-task-form',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-task-form.html',
  styleUrl: './create-task-form.css',
})
export class CreateTaskForm implements OnInit {

  formGroup: FormGroup = new FormGroup({});

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      description: [''],
      priority: ['']
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      let newTask = {
        ...this.formGroup.value,
        id: Guid.create()
      }
      this.taskService.addTask(newTask);
    }
  }

  handleCancelClick() : void {
    this.formGroup.reset();
  }
}
