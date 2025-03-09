import { Component, Input } from '@angular/core';
import { PostDetails } from '@models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  @Input({ required: true }) posts: PostDetails[] = [];
}
