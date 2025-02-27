import { Component } from '@angular/core';
import { RegisterFormComponent } from '@components/blocks/register-form/register-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';

@Component({
  selector: 'app-register',
  imports: [RegisterFormComponent, SectionComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
