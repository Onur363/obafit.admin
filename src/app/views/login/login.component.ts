import { Component, OnInit } from '@angular/core';
import { HttpClientBaseService, RequestParameters } from 'src/app/services/common/http-client-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private httpClientService: HttpClientBaseService) { }
  
  ngOnInit(): void {
    
  }

  login(username: string, password: string): void {
    const loginData = {
      username: username,
      password: password
    };

    const requestParams: RequestParameters = {
      controller: 'auth', // API controller adı
      action: 'login',    
    };

    this.httpClientService.post<any>(requestParams, loginData).subscribe(
      response => {
        console.log('Giriş başarılı:', response);
      },
      error => {
        console.error('Giriş hatası:', error);
      }
    );
  }
}