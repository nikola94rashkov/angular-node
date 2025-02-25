import { Component } from '@angular/core';
import {RegisterFormComponent} from '@components/blocks/register-form/register-form.component';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
