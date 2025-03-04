import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { LogoComponent } from '@components/blocks/logo/logo.component';
import { NavComponent } from '@components/blocks/nav/nav.component';
import { ShellComponent } from '@components/hoc/shell/shell.component';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, NavComponent, ShellComponent, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
