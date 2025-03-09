import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { SharedModule } from '@components/shared/shared.module';
import { LoginComponent } from '@components/views/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HocModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
