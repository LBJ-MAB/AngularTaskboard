import { Component } from '@angular/core';
import {GetMonthDayPipe} from '../pipes/getMonthDayString';

@Component({
  selector: 'app-task',
  imports: [
    GetMonthDayPipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  title : string = "make angular app";
  dueDate: string = "25-12-2025";
  isComplete: boolean = false;


  toggleComplete() : void {
    this.isComplete = !this.isComplete;
  }

}
