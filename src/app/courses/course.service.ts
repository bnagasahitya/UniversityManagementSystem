import { Student } from './../students/students.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { Courses } from './courses.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  retrieveCourses(){

    return this.http.get<Courses[]>(`${API_URL}/courses`);
    // localhost:8080/course/1
  }
  deleteCourse(id: any, course:Courses){
    return this.http.put(`${API_URL}/delete/course/${id}`,null);
  }
  updateCourse(id: any, course: Courses){
    return this.http.put(`${API_URL}/course/${id}`,course);
  }
  retrieveCourse(id: any){
    return this.http.get<Courses>(`${API_URL}/course/${id}`);
  }
  createCourse(course: Courses){
    return this.http.post(
              `${API_URL}/course`
                , course);
  }

}
