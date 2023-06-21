import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZnbBaseDirective } from '../znb-base/znb-base.directive';
import { ZnbSegmentedComponent } from '../znb-segmented/znb-segmented.component';
import { segmentedClass } from './znb-segmented.classes';
import { ButtonClass } from '../znb-button/znb-button.classes';
import { ZnbCompute } from '../znb-base/znb-compute';

@Component({
  selector: 'ui-znb-segmented-button',
  standalone: true,
  imports: [CommonModule, ZnbSegmentedComponent],
  templateUrl: './znb-segmented-button.component.html',
})
export class ZnbSegmentedButtonComponent extends ZnbBaseDirective {
  segmentedClass = '';
  buttonClass = '';

  @ViewChild('button') segmentedButton: ElementRef;
  // @ViewChildren('button') buttons: QueryList<ElementRef>;
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    console.log(clickedElement);
    if (clickedElement.nodeName === 'BUTTON') {
      const activeButton =
        clickedElement.parentElement?.querySelector('.active');
      if (activeButton) {
        activeButton.classList.remove('active');
      }
      clickedElement.classList.add('active');
    }
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(elementRef, segmentedClass);
    this.Segmented = true;
  }

  ngAfterContentInit() {
    this.setupElementPropierties();
    this.setupElementButtonPropierties();
  }

  setupElementButtonPropierties() {
    const buttons: QueryList<HTMLElement> =
      this.elementRef.nativeElement.querySelectorAll('button');
    buttons.forEach((button) => {
      const buttonProps = ButtonClass(this.Props, button.classList.value);
      const classes = ZnbCompute(buttonProps, this.Props);
      this.renderer.setAttribute(button, 'class', classes);
    });
  }
}
