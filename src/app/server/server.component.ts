import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() { // definition the method to get the status
    return this.serverStatus;
  }

}