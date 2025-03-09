import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { ArticlesComponent } from '@components/views/articles/articles.component';

@NgModule({
  declarations: [ArticlesComponent],
  imports: [
    CommonModule,
    PostsModule,
    HocModule,
    RouterModule.forChild([{ path: '', component: ArticlesComponent }]),
  ],
  exports: [ArticlesComponent],
})
export class ArticlesModule {}
