import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ITask} from '../../Interfaces/ITask';

@Injectable({
  providedIn: 'root',
})
export class HttpTaskService {

  constructor(private http: HttpClient) {}

  // add
  addTask(task: ITask) {
    this.http.post('url', task);
  }

  // get
  getAllTasks() {
    this.http.get('url');
  }

  // delete
  deleteTask(id: string) {
    this.http.delete('url');
  }
}
