import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementReference.nativeElement, 'background-color', '#16437E');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementReference.nativeElement, 'background-color', '#0A66C2');
  }

}
