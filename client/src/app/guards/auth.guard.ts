import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { UserStateService } from '@services/user-state/user-state-service.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const userStateService = inject(UserStateService);
  const router = inject(Router);

  const currentUser = userStateService.getCurrentUser();
  const isLoggedIn = !!currentUser;

  const protectedRoutesForLoggedIn = ['/login', '/register'];

  const protectedRoutesForNonLoggedIn = ['/dashboard'];

  if (isLoggedIn && protectedRoutesForLoggedIn.includes(state.url)) {
    router.navigate(['/dashboard']);
    return false;
  }

  if (!isLoggedIn && protectedRoutesForNonLoggedIn.includes(state.url)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
