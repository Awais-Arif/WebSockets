import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postsSub: Subscription = new Subscription;
  constructor(private PostService: PostsService) { }

  ngOnInit(): void {
    this.PostService.getPosts()
    this.postsSub = this.PostService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe()
  }
}