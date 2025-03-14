import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '@components/views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: PageNotFoundComponent }])],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
