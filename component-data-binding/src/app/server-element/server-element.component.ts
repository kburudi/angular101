import {Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() element: {type: string, name: string, content: string};
  // @Input('serverElement') element: {type: string, name: string, content: string}; ---> binding with alias(app.component.html)
  @ContentChild ('cp') contentP: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.contentP);
  }

}
