import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'] // Corrected property name from 'styleUrl' to 'styleUrls'
})
export class PostDetailComponent implements OnInit {
  post: any; 
  
  constructor(
    private route: ActivatedRoute,
    public postService: PostService 
  ) {}

  ngOnInit(): void {
    this.getPostsFromComponent();
  }

  getPostsFromComponent() {
    this.postService.getAll();
    this.getPost();
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id') || '1';
    this.post = this.postService.getById(id)
  }
}

