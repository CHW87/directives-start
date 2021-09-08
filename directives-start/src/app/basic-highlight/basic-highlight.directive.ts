import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
  // select it like an attribute
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // getting access to the element the directive was placed on
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // overriding the style of element
    this.elementRef.nativeElement.style.background = 'green';
  }
}
