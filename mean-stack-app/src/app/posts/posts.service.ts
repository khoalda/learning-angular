import { Post } from "./post.model"
import { Subject } from "rxjs"; // ~EventEmitter
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // return this.posts
    // in JS, arrays and objects are reference type -> not good

    return [...this.posts] // create a new array from the original array using spread operator -> this will not affect the original array (this is a good practice)
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}
