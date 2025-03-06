import { Injectable } from '@angular/core';
import { UserCookie } from '@models/user.model';
import { Nullable } from '@models/utils.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  private userState$ = new BehaviorSubject<Nullable<UserCookie>>(null);
  user$ = this.userState$.asObservable();

  setUserState(user: Nullable<UserCookie>) {
    this.userState$.next(user);
  }

  getCurrentUser(): Nullable<UserCookie> {
    return this.userState$.value;
  }

  clearUserState(): void {
    this.userState$.next(null);
  }
}
