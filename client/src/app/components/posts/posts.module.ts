import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PostComponent } from '@components/posts/post/post.component';
import { PostFormComponent } from '@components/posts/post-form/post-form.component';
import { PostListComponent } from '@components/posts/post-list/post-list.component';

@NgModule({
  declarations: [PostComponent, PostFormComponent, PostListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [PostComponent, PostFormComponent, PostListComponent],
})
export class PostsModule {}
