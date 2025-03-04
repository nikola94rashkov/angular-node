import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Post } from '@models/post.model';
import { PostService } from '@services/post/post.service';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  @Input() data: Post | undefined;
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
  ) {
    this.postForm = this.formBuilder.group({
      image: [''],
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.postForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.createPost(this.postForm.value).subscribe((post) => {
        console.log(post);
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
