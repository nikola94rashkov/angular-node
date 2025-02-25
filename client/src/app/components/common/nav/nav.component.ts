import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('ngOnInit nav');
  }
}
