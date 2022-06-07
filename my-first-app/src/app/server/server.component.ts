import { Component } from "@angular/core";



@Component({
    // selector: 'app-server', // normal selector
    // selector: '[app-server]', // attribute selector
    selector: '.app-server', // class selector
    templateUrl: './server.component.html'
})
export class ServerComponent{
    id = 10
    status = "active"

    getStatus = () => this.status
}








