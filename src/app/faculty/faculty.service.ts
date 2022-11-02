import { Faculty } from './faculty.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  constructor(private http: HttpClient) { }

  retrieveFacultyData(){

    return this.http.get<Faculty[]>(`${API_URL}/facultymembers`);
    // localhost:8080/course/1
  }
  deleteFaculty(id: any, faculty:Faculty){
    return this.http.put(`${API_URL}/delete/faculty/${id}`,faculty);
  }
  updateFaculty(id: any, faculty: Faculty){
    return this.http.put(`${API_URL}/updatefaculty/${id}`,faculty);
  }
  retrieveFaculty(id: any){
    return this.http.get<Faculty>(`${API_URL}/faculty/${id}`);
  }
  addFaculty(faculty: Faculty){
    return this.http.post(
              `${API_URL}/faculty`
                , faculty);
  }

}
