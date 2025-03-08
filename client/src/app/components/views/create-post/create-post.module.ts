import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsModule } from '@components/blocks/posts/posts.module';
import { HocModule } from '@components/hoc/hoc.module';
import { CreatePostComponent } from '@components/views/create-post/create-post.component';

@NgModule({
  declarations: [CreatePostComponent],
  imports: [
    CommonModule,
    HocModule,
    PostsModule,
    RouterModule.forChild([{ path: '', component: CreatePostComponent }]),
  ],
  exports: [CreatePostComponent],
})
export class CreatePostModule {}
