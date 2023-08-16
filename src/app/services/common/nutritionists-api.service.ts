import { Injectable } from '@angular/core';
import { HttpClientBaseService } from './http-client-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionistApiService {

  private nutritionistsEndpoint = 'nutritionists'; // Beslenme uzmanları için endpoint'i güncelleyin

  constructor(private httpClientService: HttpClientBaseService) { }

  getNutritionist(nutritionistId: number): Observable<any> {
    const requestParameter = {
      controller: this.nutritionistsEndpoint,
      action: 'GetNutritionist'
    };
    return this.httpClientService.get(requestParameter, nutritionistId.toString());
  }

  getAllNutritionists(): Observable<any> {
    const requestParameter = {
      controller: this.nutritionistsEndpoint,
      action: 'GetAllNutritionists'
    };
    return this.httpClientService.get(requestParameter);
  }

  deleteNutritionist(nutritionistId: number): Observable<any> {
    const requestParameter = {
      controller: this.nutritionistsEndpoint,
      action: 'DeleteNutritionist'
    };
    return this.httpClientService.delete(requestParameter, nutritionistId.toString());
  }

  updateNutritionist(nutritionistId: number, updatedNutritionist: any): Observable<any> {
    const requestParameter = {
      controller: this.nutritionistsEndpoint,
      action: 'UpdateNutritionist'
    };
    return this.httpClientService.put(requestParameter, updatedNutritionist);
  }

  addNutritionist(newNutritionist: any): Observable<any> {
    const requestParameter = {
      controller: this.nutritionistsEndpoint,
      action: 'AddNutritionist'
    };
    return this.httpClientService.post(requestParameter, newNutritionist);
  }
}
