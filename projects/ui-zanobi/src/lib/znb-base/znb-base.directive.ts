import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { IBase } from './znb-base.interface';
import { ZnbCompute } from './znb-compute';

@Directive({
  selector: 'ui-znb-base, [uiZnbBase]',
  exportAs: 'znb-base',
  standalone: true,
})
export class ZnbBaseDirective {
  private _element: ElementRef;
  private _elementConfig: any;
  private _props: IBase = {
    Vertical: false,
    Horizontal: true,
    Flat: false,
    Fill: false,
    Outline: true,
    Usual: false,
    Rounded: true,
    Pill: false,
    Raised: false,
    Primary: false,
    Secondary: false,
    Success: false,
    Warning: false,
    Danger: false,
    Info: false,
    Color: 'Primary',
    Variant: 'outline',
    Segmented: false,
  };

  constructor(
    element: ElementRef<any>,
    @Inject('ConfigService') private elementConfig: any
  ) {
    this._element = element;
    this._elementConfig = elementConfig;
  }

  @Input()
  get Custom(): string | undefined {
    return this._props.Custom;
  }
  set Custom(value: string | undefined) {
    this._props.Custom = value;
  }

  @Input()
  get Vertical(): string | boolean {
    return this._props.Vertical;
  }
  set Vertical(value: string | boolean) {
    this._props.Horizontal = false;
    this._props.Vertical = coerceBooleanProperty(value);
  }

  @Input()
  get Horizontal(): string | boolean {
    return this._props.Horizontal;
  }
  set Horizontal(value: string | boolean) {
    this._props.Horizontal = coerceBooleanProperty(value);
  }

  @Input()
  get Flat(): string | boolean {
    return this._props.Flat;
  }
  set Flat(value: string | boolean) {
    this._props.Outline = false;
    this._props.Variant = 'flat';
    this._props.Flat = coerceBooleanProperty(value);
  }

  @Input()
  get Fill(): string | boolean {
    return this._props.Fill;
  }
  set Fill(value: string | boolean) {
    this._props.Outline = false;
    this._props.Variant = 'fill';
    this._props.Fill = coerceBooleanProperty(value);
  }

  @Input()
  get Usual(): string | boolean {
    return this._props.Usual;
  }
  set Usual(value: string | boolean) {
    this._props.Outline = false;
    this._props.Variant = 'usual';
    this._props.Usual = coerceBooleanProperty(value);
  }

  @Input()
  get Outline(): string | boolean {
    return this._props.Outline;
  }
  set Outline(value: string | boolean) {
    this._props.Outline = coerceBooleanProperty(value);
  }

  @Input()
  get Rounded(): string | boolean {
    return this._props.Rounded;
  }
  set Rounded(value: string | boolean) {
    this._props.Rounded = coerceBooleanProperty(value);
  }

  @Input()
  get Pill(): string | boolean {
    return this._props.Pill;
  }
  set Pill(value: string | boolean) {
    this._props.Rounded = false;
    this._props.Pill = coerceBooleanProperty(value);
  }

  @Input()
  get Raised(): string | boolean {
    return this._props.Raised;
  }
  set Raised(value: string | boolean) {
    this._props.Raised = coerceBooleanProperty(value);
  }

  @Input()
  get Primary(): string | boolean {
    return this._props.Primary;
  }
  set Primary(value: string | boolean) {
    this._props.Color = 'Primary';
    this._props.Primary = coerceBooleanProperty(value);
  }

  @Input()
  get Secondary(): string | string | boolean {
    return this._props.Secondary;
  }
  set Secondary(value: string | boolean) {
    this._props.Color = 'Secondary';
    this._props.Secondary = coerceBooleanProperty(value);
  }

  @Input()
  get Success(): string | boolean {
    return this._props.Success;
  }
  set Success(value: string | boolean) {
    this._props.Color = 'Success';
    this._props.Success = coerceBooleanProperty(value);
  }

  @Input()
  get Warning(): string | boolean {
    return this._props.Warning;
  }
  set Warning(value: string | boolean) {
    this._props.Color = 'Warning';
    this._props.Warning = coerceBooleanProperty(value);
  }

  @Input()
  get Danger(): string | boolean {
    return this._props.Danger;
  }
  set Danger(value: string | boolean) {
    this._props.Color = 'Danger';
    this._props.Danger = coerceBooleanProperty(value);
  }

  @Input()
  get Info(): string | boolean {
    return this._props.Info;
  }
  set Info(value: string | boolean) {
    this._props.Color = 'Info';
    this._props.Info = coerceBooleanProperty(value);
  }

  @Input()
  get Segmented(): string | boolean {
    return this._props.Segmented;
  }
  set Segmented(value: string | boolean) {
    this._props.Segmented = coerceBooleanProperty(value);
  }

  get Color(): string {
    return this._props.Color;
  }

  get Variant(): string {
    return this._props.Variant;
  }

  get Props(): IBase {
    return this._props;
  }

  setupElementPropierties() {
    const elementProperties = this._elementConfig(
      this.Props,
      this._element.nativeElement.classList.value
    );
    const classesToApply = ZnbCompute(elementProperties, this.Props);
    this._element.nativeElement.classList.value = classesToApply;
  }
}
