import { Component } from "@angular/core";
// import { groupEnd } from "console";
// import { reduce } from "rxjs";



@Component({
    selector: 'app-server', // normal selector
    // selector: '[app-server]', // attribute selector
    // selector: '.app-server', // class selector
    templateUrl: './server.component.html',
    styles: [`
        .online {
            background-color: yellow
        }
    `]
})
export class ServerComponent{
    id = 10
    status = "online"

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getStatus = () => this.status
    getColor() {
        return this.status == 'online' ? 'green' : 'red' 
    }
}








