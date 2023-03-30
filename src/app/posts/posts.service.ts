import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // API_URL = environment.API_URL;
  // private postUpdated = new Subject<Post[]>()
  // private posts: Post[] = []
  // constructor(private http: HttpClient) { }

  // getPosts() {
  //   this.http.get<{ message: string, posts: Post[] }>(`${this.API_URL}/api/posts`).subscribe((response) => {
  //     this.posts = response.posts;
  //     this.postUpdated.next([...this.posts])
  //   })

  // }
  // getPostById() {
  //   this.http.get<{ message: string, posts: Post[] }>(`${this.API_URL}/api/post-by-id`).subscribe((response) => {
  //     this.posts = response.posts;
  //     this.postUpdated.next([...this.posts])
  //   })

  // }

  // getPostUpdateListener() {
  //   return this.postUpdated.asObservable()
  // }
  // addPosts(post: Post, postForm: any) {
  //   this.http.post<{ message: string }>(`${this.API_URL}/api/posts`, post).subscribe((response) => {
  //     this.posts.push(post)
  //     postForm.reset()
  //     this.postUpdated.next([...this.posts])
  //     this.getPosts()
  //   })
  // }

  // deletePost(postId: any) {
  //   this.http.delete(`${this.API_URL}/api/posts/${postId}`).subscribe((response) => {
  //     console.log(response);
  //     this.getPosts()
  //   })

  // }

}
