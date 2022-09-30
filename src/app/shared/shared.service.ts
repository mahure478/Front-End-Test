import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  projectDialogData = new Subject<any>();
  taskDialogData = new Subject();
  subTask = new Subject();

  sendProjectName(value:any) {
    this.projectDialogData.next(value);
  }

  sendTaskDetails(value:any) {
    this.taskDialogData.next(value);
  }

  sendSubTaskDetails(value:any) {
    this.subTask.next(value);
  }

  constructor() { }
}
