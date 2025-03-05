import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Post } from '@models/post.model';
import { Optional } from '@models/Util.model';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  @Input() data: Optional<Post>;
  @Output() formSubmit = new EventEmitter<Post>();

  postForm: FormGroup;
  message: string | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      image: ['', Validators.required],
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
      this.formSubmit.emit(this.postForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
