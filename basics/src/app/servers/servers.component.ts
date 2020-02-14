import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server Created';
  serverName = '';
  sName = 'startWith';
  newServer = 'Original Server';
  newServerStatus = 'New Server Pending';
  created = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Has Been Created';
  }

  onCreateNewServer() {
    this.created = true;
    this.newServerStatus = 'Server Has Been Created: ' + this.newServer;
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onUpdateSName(event: any) {
    this.sName = (event.target as HTMLInputElement).value;
  }

}
