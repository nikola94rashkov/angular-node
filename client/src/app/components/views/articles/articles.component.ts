import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetails } from '@models/post.model';
import { Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  standalone: false,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit, OnDestroy {
  subscription: Optional<Subscription>;
  post: Optional<PostDetails>;
  message: Optional<string>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}
  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('postId');

    if (postId) {
      this.subscription = this.postService.getPostById(postId).subscribe({
        next: (res) => {
          this.post = res;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
