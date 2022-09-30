import { Component, OnInit } from '@angular/core';
import { SubTasks } from '../../models/subTask.model';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-sub-task-dialog',
  templateUrl: './sub-task-dialog.component.html',
  styleUrls: ['./sub-task-dialog.component.scss']
})
export class SubTaskDialogComponent implements OnInit {

  subTaskName: string = '';
  subDescription: string = '';
  subStatus: string = '';


  constructor(private ss:SharedService) { }

  ngOnInit(): void {
  }

  onAddClick(): void {
    let obj = new SubTasks();
    obj.name = this.subTaskName;
    obj.description = this.subDescription;
    obj.status = this.subStatus;
    this.ss.sendSubTaskDetails(obj);
  }

}
