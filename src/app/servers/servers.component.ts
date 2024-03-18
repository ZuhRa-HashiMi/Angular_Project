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
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
}
