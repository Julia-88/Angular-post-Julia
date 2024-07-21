import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostService } from '../../services/post.service';
import { PostListComponent } from '../../components/post-list/post-list.component';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function
function dateFormatValidator(format: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = format.test(control.value);
    return isValid ? null : { invalidDateFormat: { value: control.value } };
  };
}

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [ReactiveFormsModule,PostListComponent,CommonModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent{
  post: any; 

  id: FormControl;
  postForm: FormGroup;
  title: FormControl;
  text: FormControl;
  author: FormControl;
  publishDate: FormControl;

  constructor(public postService: PostService) {
    this.id =  new FormControl('', Validators.required);
    this.title = new FormControl('', Validators.required);
    this.text = new FormControl('', Validators.required);
    this.author = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]);
    this.publishDate = new FormControl('', [
      Validators.required,
      dateFormatValidator(/^\d{4}-\d{2}-\d{2}$/) // Validates YYYY-MM-DD format
    ]);

    this.postForm = new FormGroup({
      id: this.id,
      title: this.title,
      text: this.text,
      author: this.author,
      publishDate: this.publishDate,
    });
  }

  handleSubmit(): void {
    let result = this.postService.createPost(this.postForm.value);
    this.postForm.reset();
    this.post = this.postService.getById(result[result.length - 1].id)
  }
}