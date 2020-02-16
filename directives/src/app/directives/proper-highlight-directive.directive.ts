import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appProperHighlightDirective]'
})
export class ProperHighlightDirectiveDirective implements OnInit {

  @Input() highLightColor = 'pink';
  @Input() defaultColor = 'purple';

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostBinding('style.Background') backgroundColor = 'yellow';

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); -- before host listening
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '1.5rem');
    this.renderer.setStyle(this.elRef.nativeElement, 'margin-top', '2.5 rem');
  }


  @HostListener('mouseenter') mouseover(evtData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highLightColor);
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseleave(evtData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor);
  }
}
