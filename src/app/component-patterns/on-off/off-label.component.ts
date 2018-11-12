import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-off-label',
  template: `
   <label *ngIf="!buttonOn">OFF</label>
  `
})
export class OffLabelComponent {
  @Input() buttonOn: boolean;
}
