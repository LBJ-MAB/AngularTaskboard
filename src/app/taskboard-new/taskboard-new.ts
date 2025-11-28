import { Component } from '@angular/core';
import {TaskboardTasksList} from './taskboard-tasks-list/tasks-list';

@Component({
  selector: 'app-taskboard-new',
  imports: [TaskboardTasksList],
  templateUrl: './taskboard-new.html',
  styleUrl: './taskboard-new.css',
})
export class TaskboardNew {
}
