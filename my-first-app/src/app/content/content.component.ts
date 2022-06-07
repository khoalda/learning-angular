import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  showInfo = false;
  list = [];


  constructor() { }

  ngOnInit(): void {
  }

  toggleInfo() {
    this.showInfo = !this.showInfo
  }
  
  pushToList() {
    // this.list.push(this.list.length + 1)
    this.list.push(new Date())
  }

}
