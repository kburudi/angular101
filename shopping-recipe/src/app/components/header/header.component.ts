import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeLink = 'recipe';
  @Output() switchLink = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onLinkClick(event) {
    const elId = event.target.id;
    if (elId === 'recipe-link') {
      this.activeLink = 'recipe';
    } else if (elId === 'shopping-link') {
      this.activeLink = 'shopping';
    }
    this.switchLink.emit(this.activeLink);
  }

}
