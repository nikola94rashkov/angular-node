import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { EditPostComponent } from '@components/views/edit-post/edit-post.component';

@NgModule({
  declarations: [EditPostComponent],
  imports: [
    CommonModule,
    HocModule,
    PostsModule,
    RouterModule.forChild([{ path: '', component: EditPostComponent }]),
  ],
  exports: [EditPostComponent],
})
export class EditPostModule {}
