import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None /*- enable global styling*/
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Element 1', content: 'Type Server Element 1 Content'}];

  onServerAdd(serverData: {name: string, content: string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.name,
        content: serverData.content
      });
    }

  onBlueprintAdd(bpData: {name: string, content: string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: bpData.name,
        content: bpData.content
      });
    }
}
