import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { HomeComponent } from '@components/views/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PostsModule,
    HocModule,
    MatPaginator,
    MatDivider,
    MatProgressSpinner,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
