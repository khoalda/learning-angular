import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // @Input() posts: Post[] = []  // receive input from the direct parent
  // postsService: PostsService;  // this is auto created by the constructor

  posts: Post[] = []  // receive input from the direct parent
  private postsSub: Subscription = new Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe(); // prevent memory leaks
  }
}
