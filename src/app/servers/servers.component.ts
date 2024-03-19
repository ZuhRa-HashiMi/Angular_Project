import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]', // select as attributes
  // selector: '.app-servers', // select as class
  selector: 'app-servers',
  // template: `<app-server></app-server>
  //               <app-server></app-server>`,
  templateUrl: './servers.component.html',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = " TestServer ";

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created successfully";
  }

  onUpdateServerName(event: Event) {
    this.serverName =(<HTMLInputElement> event.target).value;
  }
}
