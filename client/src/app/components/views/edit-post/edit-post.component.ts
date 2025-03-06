import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostFormComponent } from '@components/blocks/posts/post-form/post-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { PostDetails, PostResponse } from '@models/post.model';
import { Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  imports: [SectionComponent, PostFormComponent],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.scss',
})
export class EditPostComponent implements OnInit, OnDestroy {
  postData: Optional<PostDetails>;
  private postId: Optional<string>;
  private subscription: Optional<Subscription>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.postId = this.route.snapshot.params['postId'];
  }

  ngOnInit() {
    if (this.postId) {
      this.postService.getPostById(this.postId).subscribe({
        next: (post) => {
          console.log('postService.getPostById', post);
          this.postData = post;
        },
        error: (err) => console.log(err),
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit(postFormData: FormData) {
    if (this.postId) {
      this.subscription = this.postService.updatePost(this.postId, postFormData).subscribe({
        next: (data: PostResponse) => {
          const { post } = data;
          this.router.navigate(['/dashboard/editPost', post._id]);
        },
        error: (error) => {
          console.error('Error creating post:', error);
        },
      });
    }
  }
}
