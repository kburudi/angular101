import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css', 'link-to-other-style-sheet']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'basics';
}
