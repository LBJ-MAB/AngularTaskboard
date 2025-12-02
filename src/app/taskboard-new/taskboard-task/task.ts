import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GetMonthDayPipe} from '../../pipes/getMonthDayString';
import {ITask} from '../../Interfaces/ITask';
import {Highlight} from '../../Directives/highlight/highlight';

@Component({
  selector: 'app-taskboard-task',
  imports: [
    GetMonthDayPipe,
    Highlight
  ],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task!: ITask;
  @Output() toggleCompleteClick = new EventEmitter<string>();
  @Output() deleteTaskClick = new EventEmitter<string>();

  handleToggleCompleteClick(taskId: string) : void {
    this.toggleCompleteClick.emit(taskId);
  }

  handleDeleteTaskClick(taskId: string) : void {
    this.deleteTaskClick.emit(taskId);
  }
}
