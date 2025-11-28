import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TaskboardNew} from './taskboard-new/taskboard-new';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskboardNew],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Taskboard');
}
