import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const element = this.elRef.nativeElement;
    const ariaAToggler = element.children[0];
    const divToggler = element.children[1];
    divToggler.classList.toggle('show');
    const currentState = ariaAToggler.getAttribute('aria-expanded');
    if (currentState === 'false') {
      ariaAToggler.setAttribute('aria-expanded', 'true');
    } else {
      ariaAToggler.setAttribute('aria-expanded', 'false');
    }
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

}
