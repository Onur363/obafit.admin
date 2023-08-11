import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers/trainers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { UsersComponent } from './users/users.component';
import { NutritionistsComponent } from './nutritionists/nutritionists.component';



@NgModule({
  declarations: [
    TrainersComponent,
    UsersComponent,
    NutritionistsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
