// import { Component, EventEmitter, Output } from '@angular/core';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

  // newPost = 'No content';
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter<Post>()

  constructor(public postsService: PostsService) {}

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // alert('post added')
  //   console.log(postInput); // logging the element
  //   console.dir(postInput); // logging the object

  //   this.newPost = postInput.value;
  // }

  // onSavePost() {
  //   // this.newPost = this.enteredValue
  //   const post: Post = { title: this.enteredTitle, content: this.enteredContent };
  //   this.postCreated.emit(post)
  // }

  onAddPost(postForm: NgForm) {
    // console.dir(postForm);
    if (postForm.invalid) {
      return
    }
    // const post: Post = { title: postForm.value.title, content: postForm.value.content };
    // this.postCreated.emit(post)
    this.postsService.addPost(postForm.value.title, postForm.value.content)
    postForm.resetForm();
  }
}
