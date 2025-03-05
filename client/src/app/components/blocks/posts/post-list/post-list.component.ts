import { Component, Input } from '@angular/core';
import { PostExtended } from '@models/post.model';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  @Input({ required: true }) posts: PostExtended[] = [];
}
