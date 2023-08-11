import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainersComponent } from './trainers/trainers.component';
import { UsersComponent } from './users/users.component';
import { NutritionistsComponent } from './nutritionists/nutritionists.component';


const routes: Routes = [
  {
    path: 'trainers',
    component: TrainersComponent,
    data: {
      title: 'Trainers'
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users'
    }
  },
  {
    path: 'nutritionists',
    component: NutritionistsComponent,
    data: {
      title: 'Nutrutionist'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {
}
