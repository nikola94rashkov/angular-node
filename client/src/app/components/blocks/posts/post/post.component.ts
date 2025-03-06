import { DatePipe, NgClass } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PostDetails, PostType } from '@models/post.model';
import { Nullable, Optional } from '@models/utils.model';
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

  constructor(private userStateService: UserStateService) {}

  ngOnInit(): void {
    this.userSubscription = this.userStateService.user$.subscribe(
      (user) => (this.isUserOwnerOfThePost = user?._id === this.post?.author?._id),
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }
}
