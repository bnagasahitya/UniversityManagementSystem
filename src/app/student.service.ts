import { Student } from './students/students.component';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_URL } from './app.constants';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  
    retrieveStudents(){
  
      return this.http.get<Student[]>(`${API_URL}/students`);
    }
    deleteStudent(id: any, student:Student){
      return this.http.put(`${API_URL}/delete/student/${id}`,student);
    }
    updateStudent(id: any, student: Student){
      return this.http.put(`${API_URL}/updatestudent/${id}`,student);
    }
    retrieveStudent(id: any){
      return this.http.get<Student>(`${API_URL}/student/${id}`);
    }
    addStudent(student: Student){
      return this.http.post(
                `${API_URL}/student`
                  , student);
    }
  
}
