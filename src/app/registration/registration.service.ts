import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { Registration } from './registration.component';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http: HttpClient) { }

  retrieveRegistrations(){

    return this.http.get<Registration[]>(`${API_URL}/registrations`);
    // localhost:8080/course/1
  }
  deleteRegistration(id: any, registration:Registration){
    return this.http.put(`${API_URL}/delete/registration/${id}`,null);
  }
  updateRegistration(id: any, registration: Registration, sid: any){
    return this.http.post(`${API_URL}/updateRegistration/${id}/${sid}`,registration);
  }

  retrieveRegistration(id: any){
    return this.http.get<Registration>(`${API_URL}/registration/${id}`);
  }
  createRegistration(registration: Registration, id: any){
    return this.http.post(
              `${API_URL}/register/${id}`
                , registration);
  }

}
