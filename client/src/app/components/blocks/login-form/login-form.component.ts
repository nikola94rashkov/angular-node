import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [
    FormsModule,
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatError,
    MatInput,
    MatLabel,
    MatHint,
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm: FormGroup;
  message: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.loginForm.reset();
      },
      error: ({ error }) => {
        this.message = error.message;
        console.log(this.message);
      },
    });
  }
}
