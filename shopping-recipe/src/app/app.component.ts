import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activePage = 'recipe';
  onSwitchPage(newActivePage: string) {
    this.activePage = newActivePage;
  }
}
