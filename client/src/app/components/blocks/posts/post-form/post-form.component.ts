import { Location } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostDetails } from '@models/post.model';
import { Nullable, Optional } from '@models/utils.model';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit, OnChanges {
  @Input() data: Optional<PostDetails>;
  @Output() formSubmit = new EventEmitter<FormData>();

  postForm: FormGroup;
  selectedFile: Nullable<File> = null;
  message: Nullable<string> = null;
  imagePreview: Nullable<string> | Nullable<ArrayBuffer> = null;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.updateForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.updateForm();
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  updateForm() {
    if (this.data) {
      this.postForm.patchValue({
        title: this.data.title,
        content: this.data.content,
      });

      if (this.data.image) {
        this.imagePreview = this.data.image;
      }
    }
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData = new FormData();

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      formData.append('title', this.postForm.value.title);
      formData.append('content', this.postForm.value.content);

      this.formSubmit.emit(formData);
    } else {
      console.log('Form is invalid');
    }
  }

  cancelEdit($event: Event): void {
    $event.preventDefault();
    this.location.back();
  }
}
