import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  constructor(private http: HttpClient) { }

  getProjectData(): Observable<any> {
    return this.http.get('/assets/json/data.json');
  }
}
