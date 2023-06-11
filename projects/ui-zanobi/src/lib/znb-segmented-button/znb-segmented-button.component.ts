import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZnbBase } from '../znb-base/znb-base';
import { ZnbSegmentedComponent } from '../znb-segmented/znb-segmented.component';
import { segmentedConfig } from './znb-segmented.properties';
import { ButtonConfig } from './znb-button.properties';
import { ZnbCompute } from '../znb-base/znb-compute';

@Component({
  selector: 'ui-znb-segmented-button',
  standalone: true,
  imports: [CommonModule, ZnbSegmentedComponent],
  templateUrl: './znb-segmented-button.component.html',
})
export class ZnbSegmentedButtonComponent extends ZnbBase {
  segmentedClass = '';
  buttonClass = '';

  @ViewChild('segmentedButton') segmentedButton: ElementRef;
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
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
    super();
    console.log('constructor', this.Props);
    this.Props['Segmented'] = true;
  }

  ngAfterContentInit() {
    const segmentedProps = segmentedConfig(
      this.Props,
      this.elementRef.nativeElement.classList.value
    );
    this.segmentedClass = ZnbCompute(segmentedProps, this.Props);
    console.log('this.segmentedClass', this.segmentedClass);
    console.log('==============================================');
  }

  ngAfterViewInit() {
    const buttons: QueryList<HTMLElement> =
      this.segmentedButton.nativeElement.querySelectorAll('button');
    console.log('buttons', buttons);
    buttons.forEach((button) => {
      const buttonProps = ButtonConfig(this.Props, button.classList.value);
      const classes = ZnbCompute(buttonProps, this.Props);
      this.renderer.setAttribute(button, 'class', classes);
    });
  }
}
