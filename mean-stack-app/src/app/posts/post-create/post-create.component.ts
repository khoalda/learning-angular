import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {

  // newPost = 'No content';
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter()

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // alert('post added')
  //   console.log(postInput); // logging the element
  //   console.dir(postInput); // logging the object

  //   this.newPost = postInput.value;
  // }

  onSavePost() {
    // this.newPost = this.enteredValue
    const post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post)
  }
}
