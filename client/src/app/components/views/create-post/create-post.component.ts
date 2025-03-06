import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PostFormComponent } from '@components/blocks/posts/post-form/post-form.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-post',
  imports: [SectionComponent, PostFormComponent],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent implements OnDestroy {
  private subscription: Optional<Subscription>;

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  onSubmit(postFormData: FormData) {
    this.subscription = this.postService.createPost(postFormData).subscribe({
      next: (post) => {
        console.log('Post created:', post);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating post:', error);
      },
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
