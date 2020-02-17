import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed for server, new status: ' + status);
    // console.log('A server status changed for server ' + serverName + ', new status: ' + status);
  }

  constructor() { }
}
