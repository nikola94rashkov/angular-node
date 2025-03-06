import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserCookie } from '@models/user.model';
import { Nullable, Optional } from '@models/utils.model';
import { AuthService } from '@services/auth/auth.service';
import { UserStateService } from '@services/user-state/user-state-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit, OnDestroy {
  user: Nullable<UserCookie> = null;
  private userSubscription: Optional<Subscription>;

  constructor(
    private userStateService: UserStateService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.userSubscription = this.userStateService.user$.subscribe((user) => (this.user = user));
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => console.log(err),
    });
  }
}
