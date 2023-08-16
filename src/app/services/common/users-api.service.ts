import { Injectable } from '@angular/core';
import { HttpClientBaseService } from './http-client-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  private usersEndpoint = 'users'; 

  constructor(private httpClientService: HttpClientBaseService) { }

  getUser(userId: number): Observable<any> {
    const requestParameter = {
      controller: this.usersEndpoint,
      action: 'GetUser'
    };
    return this.httpClientService.get(requestParameter, userId.toString());
  }

  getAllUsers(): Observable<any> {
    const requestParameter = {
      controller: this.usersEndpoint,
      action: 'GetAllUsers'
    };
    return this.httpClientService.get(requestParameter);
  }

  deleteUser(userId: number): Observable<any> {
    const requestParameter = {
      controller: this.usersEndpoint,
      action: 'DeleteUser'
    };
    return this.httpClientService.delete(requestParameter, userId.toString());
  }

  updateUser(userId: number, updatedUser: any): Observable<any> {
    const requestParameter = {
      controller: this.usersEndpoint,
      action: 'UpdateUser'
    };
    return this.httpClientService.put(requestParameter, updatedUser);
  }

  addUser(newUser: any): Observable<any> {
    const requestParameter = {
      controller: this.usersEndpoint,
      action: 'AddUser'
    };
    return this.httpClientService.post(requestParameter, newUser);
  }
}
