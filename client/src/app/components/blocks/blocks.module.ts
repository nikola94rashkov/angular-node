import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '@components/blocks/dialog/dialog.component';
import { FooterComponent } from '@components/blocks/footer/footer.component';
import { HeaderComponent } from '@components/blocks/header/header.component';
import { LoginFormComponent } from '@components/blocks/login-form/login-form.component';
import { LogoComponent } from '@components/blocks/logo/logo.component';
import { NavComponent } from '@components/blocks/nav/nav.component';
import { PostsModule } from '@components/blocks/posts/posts.module';
import { RegisterFormComponent } from '@components/blocks/register-form/register-form.component';
import { HocModule } from '@components/hoc/hoc.module';

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
export class BlocksModule {}
