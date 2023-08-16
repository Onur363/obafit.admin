import { Injectable } from '@angular/core';
import { HttpClientBaseService } from './http-client-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainersApiService {

  private trainersEndpoint = 'trainers'; 

  constructor(private httpClientService: HttpClientBaseService) { }

  getTrainer(trainerId: number): Observable<any> {
    const requestParameter = {
      controller: this.trainersEndpoint,
      action: 'GetTrainer'
    };
    return this.httpClientService.get(requestParameter, trainerId.toString());
  }

  getAllTrainers(): Observable<any> {
    const requestParameter = {
      controller: this.trainersEndpoint,
      action: 'GetAllTrainers'
    };
    return this.httpClientService.get(requestParameter);
  }

  deleteTrainer(trainerId: number): Observable<any> {
    const requestParameter = {
      controller: this.trainersEndpoint,
      action: 'DeleteTrainer'
    };
    return this.httpClientService.delete(requestParameter, trainerId.toString());
  }

  updateTrainer(trainerId: number, updatedTrainer: any): Observable<any> {
    const requestParameter = {
      controller: this.trainersEndpoint,
      action: 'UpdateTrainer'
    };
    return this.httpClientService.put(requestParameter, updatedTrainer);
  }

  addTrainer(newTrainer: any): Observable<any> {
    const requestParameter = {
      controller: this.trainersEndpoint,
      action: 'AddTrainer'
    };
    return this.httpClientService.post(requestParameter, newTrainer);
  }
}