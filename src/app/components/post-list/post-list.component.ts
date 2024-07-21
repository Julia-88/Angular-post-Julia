import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.getPostsFromComponent();
  }

  getPostsFromComponent() {
    this.postService.getAll();
  }
}

