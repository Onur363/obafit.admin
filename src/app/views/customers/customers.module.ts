import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers/trainers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { UsersComponent } from './users/users.component';
import { NutritionistsComponent } from './nutritionists/nutritionists.component';
import { TrainersApiService } from 'src/app/services/common/trainers-api.service';
import { NutritionistApiService } from 'src/app/services/common/nutritionists-api.service';
import { UsersApiService } from 'src/app/services/common/users-api.service';



@NgModule({
  declarations: [
    TrainersComponent,
    UsersComponent,
    NutritionistsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers:[
    TrainersApiService,
    NutritionistApiService,
    UsersApiService
  ]
})
export class CustomersModule { }
