import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetMonthDayPipe} from '../../pipes/getMonthDayString';
import {ITask} from '../../Interfaces/ITask';

@Component({
  selector: 'app-taskboard-task',
  imports: [
    GetMonthDayPipe
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() toggleCompleteClick = new EventEmitter<number>();
  @Output() deleteTaskClick = new EventEmitter<number>();

  handleToggleCompleteClick(taskId: number) : void {
    this.toggleCompleteClick.emit(taskId);
  }

  handleDeleteTaskClick(taskId: number) : void {
    this.deleteTaskClick.emit(taskId);
  }
}
