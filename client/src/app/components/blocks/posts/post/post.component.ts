import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostExtended, PostType } from '@models/post.model';

@Component({
  selector: 'app-post',
  imports: [RouterLink, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input({ required: true }) post: PostExtended | null = null;
  @Input() typeOfPost: PostType = 'post';
  isComponentSingle = this.typeOfPost === 'post' ? 'article--single' : '';

  ngOnInit(): void {
    console.log(this.post);

    console.log('post', this.post);
  }
}
