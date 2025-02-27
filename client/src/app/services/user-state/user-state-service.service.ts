import { Injectable } from '@angular/core';
import { UserCookie } from '@models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userState$ = new BehaviorSubject<UserCookie | null>(null);
  user$ = this.userState$.asObservable();

  setUserState(user: UserCookie | null) {
    this.userState$.next(user);
  }

  getCurrentUser(): UserCookie | null {
    return this.userState$.value;
  }

  clearUserState(): void {
    this.userState$.next(null);
  }
}
