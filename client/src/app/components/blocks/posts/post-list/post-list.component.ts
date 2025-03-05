import { Component, Input } from '@angular/core';
import { PostComponent } from '@components/blocks/posts/post/post.component';
import { PostExtended } from '@models/post.model';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  @Input({ required: true }) posts: PostExtended[] = [];
}
