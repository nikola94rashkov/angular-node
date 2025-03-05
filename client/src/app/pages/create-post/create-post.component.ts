import { Component } from '@angular/core';
import { PostFormComponent } from '@components/blocks/posts/post-form/post-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';

@Component({
  selector: 'app-create-post',
  imports: [SectionComponent, PostFormComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {}
