import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { DashboardComponent } from '@components/views/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatDivider,
    MatPaginator,
    MatProgressSpinner,
    PostsModule,
    HocModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
