import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZnbButtonDirective } from 'projects/ui-zanobi/src/public-api';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ZnbButtonDirective],
  templateUrl: './button.component.html',
})
export class ButtonComponent {}
