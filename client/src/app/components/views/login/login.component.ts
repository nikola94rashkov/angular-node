import { Component } from '@angular/core';
import { LoginFormComponent } from '@components/blocks/login-form/login-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';

@Component({
  selector: 'app-login',
  imports: [SectionComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
