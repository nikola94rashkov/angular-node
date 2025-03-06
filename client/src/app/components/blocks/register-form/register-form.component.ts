import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserResponse } from '@models/user.model';
import { Nullable } from '@models/utils.model';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  registrationForm: FormGroup;
  message: Nullable<string> = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  setMessage(message: Nullable<string>): void {
    this.message = message;
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService.createUser(this.registrationForm.value).subscribe({
        next: ({ user, message }: UserResponse) => {
          console.log('User created successfully', user);
          this.setMessage(message);
          this.router.navigate(['login']);
          this.registrationForm.reset();
        },
        error: ({ error: { message } }) => {
          this.setMessage(message);
        },
      });
    }
  }
}
