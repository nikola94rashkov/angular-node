import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { SharedModule } from '@components/shared/shared.module';
import { RegisterComponent } from '@components/views/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HocModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
