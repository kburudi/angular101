import { Component } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(
    // private loggingSvc: LoggingService,
    private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({name: accountName, status: accountStatus});
    // this.loggingSvc.logStatusChange(accountStatus , accountName);
  }
}
