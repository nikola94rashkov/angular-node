import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { DialogComponent } from '@components/shared/dialog/dialog.component';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { HeaderComponent } from '@components/shared/header/header.component';
import { LoginFormComponent } from '@components/shared/login-form/login-form.component';
import { LogoComponent } from '@components/shared/logo/logo.component';
import { NavComponent } from '@components/shared/nav/nav.component';
import { RegisterFormComponent } from '@components/shared/register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    DialogComponent,
    FooterComponent,
    LoginFormComponent,
    LogoComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    HocModule,
    PostsModule,
  ],
  exports: [
    RegisterFormComponent,
    DialogComponent,
    FooterComponent,
    LoginFormComponent,
    LogoComponent,
    NavComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
