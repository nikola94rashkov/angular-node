import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserCredentials, UserResponse } from '@models/user.model';
import { LocalService } from '@services/local/local.service';
import { UserStateService } from '@services/user-state/user-state-service.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/auth';

  constructor(
    private http: HttpClient,
    private userStateService: UserStateService,
    private localService: LocalService,
  ) {}

  createUser(userData: User) {
    return this.http.post<UserResponse>(`${this.apiUrl}/register`, {
      ...userData,
      role: 0,
      registerDate: new Date(),
    });
  }

  login(userCredentials: UserCredentials) {
    return this.http.post<UserResponse>(`${this.apiUrl}/login`, userCredentials).pipe(
      tap((res) => {
        const { user } = res;

        this.localService.saveData('user', JSON.stringify(user));
        this.userStateService.setUserState(user);
      }),
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this.localService.removeData('user');
        this.userStateService.clearUserState();
      }),
    );
  }

  autoLogin() {
    const userData = this.localService.getData('user');

    console.log(userData);

    if (userData) {
      const user = JSON.parse(userData);
      this.userStateService.setUserState(user);
    }
  }
}
