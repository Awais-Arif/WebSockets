import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  API_URL = environment.API_URL;
  private postUpdated = new Subject<Post[]>()
  private posts: Post[] = []
  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{ message: string, posts: Post[] }>(`${this.API_URL}/api/posts`).subscribe((response) => {
      this.posts = response.posts;
      this.postUpdated.next([...this.posts])
    })

  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable()
  }
  addPosts(post: Post) {

    this.http.post<{ message: string }>(`${this.API_URL}/api/posts`, post).subscribe((response) => {
      console.log(response.message);
      this.posts.push(post)
      this.postUpdated.next([...this.posts])
    })
  }
}
