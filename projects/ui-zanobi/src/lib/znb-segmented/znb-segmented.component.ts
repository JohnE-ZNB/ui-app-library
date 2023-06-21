import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZnbBaseDirective } from '../znb-base/znb-base.directive';
import { segmentedClass } from './znb-segmented.classes';

@Component({
  selector: 'ui-znb-segmented',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './znb-segmented.component.html',
})
export class ZnbSegmentedComponent extends ZnbBaseDirective {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(elementRef, segmentedClass);
    this.Segmented = true;
  }
  // ngAfterViewInit(): void {
  //   console.log('Segmented');
  //   console.log('this._custom', this.Custom);
  //   console.log('this._vertical', this.Vertical);
  //   console.log('this._horizontal', this.Horizontal);
  //   console.log('this._fill', this.Fill);
  //   console.log('this._outline', this.Outline);
  //   console.log('this._flat', this.Flat);
  //   console.log('this._round', this.Rounded);
  //   console.log('this._pill', this.Pill);
  //   console.log('this._raised', this.Raised);
  //   console.log('this._primary', this.Primary);
  //   console.log('this._secondary', this.Secondary);
  //   console.log('this._success', this.Success);
  //   console.log('this._warning', this.Warning);
  //   console.log('this._danger', this.Danger);
  //   console.log('this._info', this.Info);
  //   console.log('this._color', this.Color);
  //   console.log('==============================================');
  // }
}
