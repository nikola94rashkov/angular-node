import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCredentials } from '@models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/auth';

  constructor(private http: HttpClient) {}

  createUser(userData: User) {
    return this.http.post<User>(`${this.apiUrl}/register`, userData);
  }

  // private saveUserData(userData: User) {}

  loginUser(userCredentials: UserCredentials) {
    return this.http.post(`${this.apiUrl}/login`, userCredentials).subscribe({
      next: (result) => {
        console.log('result', result);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
