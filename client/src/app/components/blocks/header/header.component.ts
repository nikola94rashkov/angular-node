import { Component } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { LogoComponent } from '@components/common/logo/logo.component';
import { NavComponent } from '@components/common/nav/nav.component';
import { ShellComponent } from '@components/common/shell/shell.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NavComponent, ShellComponent, MatButtonToggle, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
