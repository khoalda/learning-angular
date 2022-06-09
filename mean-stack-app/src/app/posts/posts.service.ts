import { Post } from "./post.model"

export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    // return this.posts
    // in JS, arrays and objects are reference type -> not good

    return [...this.posts] // create a new array from the original array using spread operator -> this will not affect the original array (this is a good practice)
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content}
    this.posts.push(post)
  }
}
