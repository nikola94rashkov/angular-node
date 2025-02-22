import { Component } from '@angular/core';
import { LogoComponent } from '@components/common/logo/logo.component';
import { NavComponent } from '@components/common/nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
