import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksModule } from '@components/blocks/blocks.module';
import { HocModule } from '@components/hoc/hoc.module';
import { LoginComponent } from '@components/views/login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HocModule,
    BlocksModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
