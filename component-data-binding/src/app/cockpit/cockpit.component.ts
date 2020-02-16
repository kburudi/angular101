import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /* Exporting methods output to parent*/
  @Output() bpCreated = new EventEmitter<{name: string, content: string}>();
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();

  // newServerName = '';
  // newServerContent = '';

  /* Element referencing from view template */
  @ViewChild('content') serverContent: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {name: nameInput.value, content: this.serverContent.nativeElement.value}
    );
    }

  onAddBlueprint(nameInput: string) {
      this.bpCreated.emit(
        {name: nameInput, content: this.serverContent.nativeElement.value}
      );
    }

  constructor() { }

  ngOnInit(): void {
  }

}
