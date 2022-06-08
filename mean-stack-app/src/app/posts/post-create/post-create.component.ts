import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newPost = 'No content'
  enteredValue = ''

  onAddPost(postInput: HTMLTextAreaElement) {
    // alert('post added')
    console.log(postInput); // logging the element
    console.dir(postInput); // logging the object

    this.newPost = postInput.value;
  }

  onSavePost() {
    this.newPost = this.enteredValue
  }
}
