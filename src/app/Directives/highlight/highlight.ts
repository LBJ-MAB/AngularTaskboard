import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  @Input('appHighlight') highlightColor: string = "rgba(173, 216, 230, 0.3)";

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  highlight(highlightColor: string) {
    this.el.nativeElement.style.backgroundColor = highlightColor;
  }
}
