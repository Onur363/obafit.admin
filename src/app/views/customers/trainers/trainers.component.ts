import { Component, OnInit } from '@angular/core';
import { TrainersApiService } from 'src/app/services/common/trainers-api.service';


@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {
  trainers: any[] = [];
  newTrainer: any = {};
  selectedTrainer: any = {};

  constructor(private trainersApiService: TrainersApiService) { }

  ngOnInit(): void {
    this.loadTrainers();
  }

  loadTrainers(): void {
    this.trainersApiService.getAllTrainers().subscribe(
      (data) => {
        this.trainers = data;
      },
      (error) => {
        console.error('Error fetching trainers:', error);
      }
    );
  }

  createTrainer(): void {
    this.trainersApiService.addTrainer(this.newTrainer).subscribe(
      () => {
        console.log('Trainer created successfully.');
        this.loadTrainers();
        this.newTrainer = {}; 
      },
      (error) => {
        console.error('Error creating trainer:', error);
      }
    );
  }

  updateTrainer(): void {
    this.trainersApiService.updateTrainer(this.selectedTrainer.id, this.selectedTrainer).subscribe(
      () => {
        console.log('Trainer updated successfully.');
        this.loadTrainers();
        this.selectedTrainer = {}; 
      },
      (error) => {
        console.error('Error updating trainer:', error);
      }
    );
  }

  deleteTrainer(trainerId: number): void {
    this.trainersApiService.deleteTrainer(trainerId).subscribe(
      () => {
        console.log('Trainer deleted successfully.');
        this.loadTrainers();
      },
      (error) => {
        console.error('Error deleting trainer:', error);
      }
    );
  }
}