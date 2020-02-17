import { Component, Input } from '@angular/core';
import {LoggingService} from '../services/logging.service';
import {AccountsService} from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    // private logService: LoggingService,
    private accountsService: AccountsService) {
  }
  onSetTo(status: string) {
    this.accountsService.onStatusChanged({id: this.id, newStatus: status});
    // this.logService.logStatusChange(status, this.account.name);
    this.accountsService.statusUpdated.emit(status);
  }
}
