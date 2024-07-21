// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import Post from '../models/Post'

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   readonly API_URL = "https://my-json-server.typicode.com/mariogiron/blog-server/posts";

//   posts: Post[];
 
//   constructor(private http: HttpClient) {

//     this.posts = [];
    
//   }

//   getAll() {
//     this.http.get<Post[]>(this.API_URL).subscribe((data: Post[]) => {
//       this.posts = data;
//     }, error => {
//       console.error('Error fetching posts:', error);
//     });
//   }

//   getById(id: string) {
//     console.log(id)
//     console.log(this.posts)
//     return this.http.get<Post>(`${this.API_URL}/${id}`)
//   }

//   createPost(post: Post) {
//     this.posts.push(post);
//     return this.posts;
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private API_URL = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts';
  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$: Observable<Post[]> = this.postsSubject.asObservable();

  posts: Post[];

  constructor(private http: HttpClient) {
    this.loadInitialData();
    this.posts = [];
    this.posts$.subscribe(posts => this.posts = posts)
  }

  private loadInitialData() {
    this.http.get<Post[]>(this.API_URL).pipe(
      tap(posts => this.postsSubject.next(posts))
    ).subscribe();
  }

  getAll(): Observable<Post[]> {
    this.posts$.subscribe(posts => this.posts = posts)
    //console.log(this.posts)
    return this.posts$; 
  }

  getById(id: string){
    return this.posts.filter(post => post.id == id)[0]
  }

  createPost(post: Post) {
    this.posts.push(post);
    //console.log(this.posts)
    return this.posts;
  }
}