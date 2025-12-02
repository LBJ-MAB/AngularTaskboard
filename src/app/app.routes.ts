import { Routes } from '@angular/router';
import { TaskboardNew } from './taskboard-new/taskboard-new';
import { CreateTaskForm } from './create-task-form/create-task-form';

export const routes: Routes = [
  {
    path:'', component:CreateTaskForm
  },
  {
    path:'create', component:CreateTaskForm
  },
  {
    path:'tasks', component:TaskboardNew
  }
];
