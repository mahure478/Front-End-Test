import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

//Components
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ProjectDialogComponent } from './dialog/project-dialog/project-dialog.component';
import { TaskDialogComponent } from './dialog/task-dialog/task-dialog.component';
import { SubTaskDialogComponent } from './dialog/sub-task-dialog/sub-task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    ProjectDialogComponent,
    TaskDialogComponent,
    SubTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
