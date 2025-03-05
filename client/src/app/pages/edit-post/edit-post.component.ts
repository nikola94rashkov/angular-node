import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostFormComponent } from '@components/blocks/posts/post-form/post-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { Post } from '@models/post.model';
import { Optional } from '@models/Util.model';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-edit-post',
  imports: [SectionComponent, PostFormComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss',
})
export class EditPostComponent implements OnInit {
  postData: Optional<Post>;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const postId = this.route.snapshot.params['postId'];

    console.log('postId', postId);
  }

  onSubmit($event: Post) {}
}
