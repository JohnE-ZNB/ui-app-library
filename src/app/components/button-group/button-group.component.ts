import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZnbSegmentedButtonComponent } from 'projects/ui-zanobi/src/public-api';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [CommonModule, ZnbSegmentedButtonComponent],
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent {}
