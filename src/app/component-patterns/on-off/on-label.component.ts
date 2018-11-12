import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-label',
  template: `
   <label *ngIf="buttonOn">ON</label>
  `
})
export class OnLabelComponent {
  @Input() buttonOn: boolean;
}
