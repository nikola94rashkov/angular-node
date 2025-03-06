import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostComponent } from '@components/blocks/posts/post/post.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { PostExtended } from '@models/post.model';
import { Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  imports: [SectionComponent, PostComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
})
export class ArticlesComponent implements OnInit, OnDestroy {
  subscription: Optional<Subscription>;
  post: Optional<PostExtended>;
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
    console.log('destroyed');
  }
}
