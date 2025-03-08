import { DatePipe, NgClass } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { DialogComponent } from '@components/blocks/dialog/dialog.component';
import { PostDetails, PostType } from '@models/post.model';
import { Nullable, Optional } from '@models/utils.model';
import { PostService } from '@services/post/post.service';
import { UserStateService } from '@services/user-state/user-state-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [RouterLink, DatePipe, NgClass, MatIcon],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit, OnDestroy {
  @Input({ required: true }) post: Nullable<PostDetails> = null;
  @Input() typeOfPost: PostType = 'post';
  isUserOwnerOfThePost = false;
  private userSubscription: Optional<Subscription>;
  private deleteSubscription: Optional<Subscription>;

  constructor(
    private userStateService: UserStateService,
    private postService: PostService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userSubscription = this.userStateService.user$.subscribe(
      (user) => (this.isUserOwnerOfThePost = user?._id === this.post?.author?._id),
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.deleteSubscription) this.deleteSubscription.unsubscribe();
  }

  openDialog($event: Event): void {
    $event.preventDefault();
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.post?._id) {
        this.deleteSubscription = this.postService.deletePost(this.post._id).subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['/']);
          },
          error: (err) => {
            console.error(err);
          },
        });
      }
    });
  }
}
