import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/services/common/users-api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  newUser: any = {};
  selectedUser: any = {};

  constructor(private usersApiService: UsersApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersApiService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  createUser(): void {
    this.usersApiService.addUser(this.newUser).subscribe(
      () => {
        console.log('User created successfully.');
        this.loadUsers();
        this.newUser = {}; 
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    );
  }

  updateUser(): void {
    this.usersApiService.updateUser(this.selectedUser.id, this.selectedUser).subscribe(
      () => {
        console.log('User updated successfully.');
        this.loadUsers();
        this.selectedUser = {}; 
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  deleteUser(userId: number): void {
    this.usersApiService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully.');
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
