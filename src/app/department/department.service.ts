import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { Department } from './department.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

 
  constructor(private http: HttpClient) { }

  retrieveDepartments(){ 

    return this.http.get<Department[]>(`${API_URL}/departments`);
  }
  deleteDepartment(id: any, department:Department){
    return this.http.post(`${API_URL}/deletedepartment/${id}`,null);
  }
  updateDepartment(id: any, department: Department, cid: any){
    return this.http.put(`${API_URL}/updatedepartment/${id}/${cid}`,department);
  }
  retrieveDepartment(id: any){
    return this.http.get<Department>(`${API_URL}/department/${id}`);
  }
  addDepartment(department: Department, id: any){
    return this.http.post(
              `${API_URL}/createdepartment/${id}`
                , department);
  }

}
