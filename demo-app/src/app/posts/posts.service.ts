import { Post } from "./post.model"
import { Subject } from "rxjs"; // ~EventEmitter
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<Post[]>('http://localhost:8080/v1/post')
      .subscribe((postData) => {
        this.posts = postData
        this.postsUpdated.next([...this.posts])
      })
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string) {
    const post: Post = { Id: 0, Title: title, Content: content }
    this.posts.push(post)
    this.postsUpdated.next([...this.posts])
  }
}
