import { Component, OnInit } from '@angular/core';
import { NutritionistApiService } from 'src/app/services/common/nutritionists-api.service';


@Component({
  selector: 'app-nutritionists',
  templateUrl: './nutritionists.component.html',
  styleUrls: ['./nutritionists.component.scss']
})
export class NutritionistsComponent implements OnInit {
  nutritionists: any[] = [];
  newNutritionist: any = {};
  selectedNutritionist: any = {};

  constructor(private nutritionistApiService: NutritionistApiService) { }

  ngOnInit(): void {
    this.loadNutritionists();
  }

  loadNutritionists(): void {
    this.nutritionistApiService.getAllNutritionists().subscribe(
      (data) => {
        this.nutritionists = data;
      },
      (error) => {
        console.error('Error fetching nutritionists:', error);
      }
    );
  }

  createNutritionist(): void {
    this.nutritionistApiService.addNutritionist(this.newNutritionist).subscribe(
      () => {
        console.log('Nutritionist created successfully.');
        this.loadNutritionists();
        this.newNutritionist = {}; 
      },
      (error) => {
        console.error('Error creating nutritionist:', error);
      }
    );
  }

  updateNutritionist(): void {
    this.nutritionistApiService.updateNutritionist(this.selectedNutritionist.id, this.selectedNutritionist).subscribe(
      () => {
        console.log('Nutritionist updated successfully.');
        this.loadNutritionists();
        this.selectedNutritionist = {}; 
      },
      (error) => {
        console.error('Error updating nutritionist:', error);
      }
    );
  }

  deleteNutritionist(nutritionistId: number): void {
    this.nutritionistApiService.deleteNutritionist(nutritionistId).subscribe(
      () => {
        console.log('Nutritionist deleted successfully.');
        this.loadNutritionists();
      },
      (error) => {
        console.error('Error deleting nutritionist:', error);
      }
    );
  }
}
