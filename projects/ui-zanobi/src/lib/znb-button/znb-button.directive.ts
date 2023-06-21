import { Directive, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ZnbBaseDirective } from '../znb-base/znb-base.directive';
import { ButtonClass } from './znb-button.classes';

@Directive({
  selector: 'ui-znb-button, [uiZnbButton]',
  exportAs: 'znb-button',
  standalone: true,
})
export class ZnbButtonDirective extends ZnbBaseDirective {
  constructor(private elementRef: ElementRef) {
    super(elementRef, ButtonClass);
    // this.Segmented = false;
  }
  ngAfterViewInit() {
    console.log('propiedades', this.Props);
    this.setupElementPropierties();
  }
}
