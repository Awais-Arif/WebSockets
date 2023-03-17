import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post = {
    id: '',
    title: "",
    content: ""
  }

  postCreated: Post[] = [];
  constructor(private PostService: PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(postForm: any) {
    this.PostService.addPosts(this.post)
    // postForm.reset();
  }
}
