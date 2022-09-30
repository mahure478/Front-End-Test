import { Component, OnInit } from '@angular/core';
import { Tasks } from '../../models/task.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {
  taskName: string = '';
  description: string = '';
  status: string = '';

  constructor(private ss:SharedService) { }

  ngOnInit(): void {
  }

  onAddClick(){
    let obj = new Tasks();
    obj.name = this.taskName;
    obj.description = this.description;
    obj.status = this.status;
    this.ss.sendTaskDetails(obj);
  }

}
