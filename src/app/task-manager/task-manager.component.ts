import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../dialog/project-dialog/project-dialog.component';
import { TaskManagerService } from './task-manager.service';
import { SharedService } from '../shared/shared.service';
import { Project } from '../models/project.model';
import { TaskDialogComponent } from '../dialog/task-dialog/task-dialog.component';
import { Tasks } from '../models/task.model';
import { SubTaskDialogComponent } from '../dialog/sub-task-dialog/sub-task-dialog.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {

  resultArr: Project[]=[];
  panelOpenState = false;
  obj  = new Project();

  constructor(private taskManager:TaskManagerService,private matDialog: MatDialog,
              private ss:SharedService) { }

  ngOnInit(): void {
    this.getProjectData();
  }

  /**
   * Get Json Data and Store it.
   */
  getProjectData(): void {
    this.taskManager.getProjectData().subscribe(res => {
      this.resultArr = res.projects;
      console.log(this.resultArr)
    })
  }

  /**
   * Add a new Project
   */
  addNewProject(): void {
  this.matDialog.open(ProjectDialogComponent);
  this.ss.projectDialogData.subscribe(res => {
      this.obj.name=res;
      this.obj.id=this.resultArr.length+1;

   console.log(res);

   this.resultArr.push(this.obj)
  })
  }

  /**
   * Edit existing project
   * @param i 
   */
  editProject(i:number) :void {
    this.matDialog.open(ProjectDialogComponent,{
      data:this.resultArr[i].name
    });
  }
  
  /**
   *  Delete the project
   * @param i 
   */
  deleteProject(i:number) : void{
    this.resultArr.splice(i,1);
  }

  /**
   * Add new Task in project
   * @param prjIndex 
   */
  addNewTask(prjIndex:number): void {
    this.matDialog.open(TaskDialogComponent);
    this.ss.taskDialogData.subscribe((res:any) => {
      this.resultArr[prjIndex].tasks.push(res);
    })
  }

  /**
   * Delete Task in Prject
   * @param i 
   */
  deleteTask(i:number,j:number): void {
    this.resultArr[i].tasks.splice(j,1);
  }

  /**
   * Add Childeren to Task
   * @param projIndex 
   * @param taskIndex 
   */
  addNewSubTask(projIndex:number,taskIndex:number): void {
   this.matDialog.open(SubTaskDialogComponent);
   this.ss.subTask.subscribe((res:any) => {
    this.resultArr[projIndex].tasks[taskIndex].children.push(res);
   })
  }

  /***
   * Delete Children from Task
   */
  deleteSubTask(projIndex:number,taskIndex:number): void {
    this.resultArr[projIndex].tasks[taskIndex].children.splice(taskIndex,1)
  }


}
