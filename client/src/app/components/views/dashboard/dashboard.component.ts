import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { PostListComponent } from '@components/blocks/posts/post-list/post-list.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { PostDetails } from '@models/post.model';
import { UserCookie } from '@models/user.model';
import { Nullable, Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { UserStateService } from '@services/user-state/user-state-service.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [SectionComponent, MatDivider, MatPaginator, MatProgressSpinner, PostListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  posts: PostDetails[] = [];
  length = 0;
  pageSizeOptions = [8, 12];
  pageIndex = 1;
  previousPageIndex: Optional<number>;
  pageSize = 8;
  totalPages = 0;

  user: Nullable<UserCookie> = null;
  private subscription: Optional<Subscription>;
  private userSubscription: Optional<Subscription>;
  private destroy$ = new Subject<void>();

  constructor(
    private postService: PostService,
    private userStateService: UserStateService,
  ) {}

  ngOnInit() {
    this.userSubscription = this.userStateService.user$.subscribe((user) => (this.user = user));

    if (this.user?._id) {
      this.getPostData(this.user._id, this.pageIndex, this.pageSize);
    }
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }

  onPageChange(event: PageEvent) {
    const { pageIndex, previousPageIndex, pageSize } = event;
    this.previousPageIndex = previousPageIndex;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex + 1;

    if (this.user?._id) {
      this.getPostData(this.user._id, this.pageIndex, this.pageSize);
    }
    console.log('length <= pageSize', this.length <= this.pageSize);
  }

  getPostData(userId: string, page: number, limit: number) {
    this.subscription = this.postService.getPostsByUserId(userId, page, limit).subscribe({
      next: (result) => {
        console.log('my posts', result);
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
