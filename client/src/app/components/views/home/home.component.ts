import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PostDetails } from '@models/post.model';
import { Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  posts: PostDetails[] = [];
  length = 0;
  pageSizeOptions = [8, 12];
  pageIndex = 1;
  previousPageIndex: Optional<number>;
  pageSize = 12;
  totalPages = 0;

  private subscription: Optional<Subscription>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPostData(this.pageIndex, this.pageSize);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onPageChange($event: PageEvent) {
    const { pageIndex, previousPageIndex, pageSize } = $event;
    this.previousPageIndex = previousPageIndex;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex + 1;

    this.getPostData(this.pageIndex, this.pageSize);
  }

  getPostData(page: number, limit: number) {
    this.subscription = this.postService.getAllPosts(page, limit).subscribe({
      next: (result) => {
        this.length = result.totalPosts;
        this.totalPages = result.totalPages;
        this.posts = result.posts;
        this.pageIndex = result.currentPage;
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }
}
