import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el=inject(ElementRef)
  @Input() appHighlight=''
  constructor() {
      
   }

   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}
