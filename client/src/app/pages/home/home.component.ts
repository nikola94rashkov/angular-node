import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PostListComponent } from '@components/blocks/posts/post-list/post-list.component';
import { SectionComponent } from '@components/hoc/section/section.component';
import { PostExtended } from '@models/post.model';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-home',
  imports: [SectionComponent, PostListComponent, MatPaginator, MatDivider],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  posts: PostExtended[] = [];
  length = 0;
  pageSizeOptions = [5, 10];
  pageIndex = 1;
  previousPageIndex: number | undefined;
  pageSize = 5;
  totalPages = 0;

  constructor(private postService: PostService) {}

  onPageChange(event: PageEvent) {
    const { pageIndex, previousPageIndex, pageSize } = event;
    this.previousPageIndex = previousPageIndex;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;

    this.getPostData(pageIndex, pageSize);
  }

  ngOnInit() {
    this.getPostData(this.pageIndex, this.pageSize);
  }

  getPostData(page: number, limit: number) {
    this.postService.getAllPosts(page, limit).subscribe({
      next: (result) => {
        this.length = result.totalPosts;
        this.totalPages = result.totalPages;
        this.posts = result.posts;
        this.pageIndex = result.currentPage;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
