import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlocksModule } from '@components/blocks/blocks.module';
import { HocModule } from '@components/hoc/hoc.module';
import { RegisterComponent } from '@components/views/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HocModule,
    BlocksModule,
    RouterModule.forChild([{ path: '', component: RegisterComponent }]),
  ],
  exports: [RegisterComponent],
})
export class RegisterModule {}
