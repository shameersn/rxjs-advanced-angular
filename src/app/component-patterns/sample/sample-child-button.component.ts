import { Component } from '@angular/core';
import { SampleParentComponent } from './sample-parent.component';

@Component({
  selector: 'app-sample-child-button',
  template: `<button (click)="onClick()">Change text</button>`
})
export class SampleChildButtonComponent {
  constructor(public parent: SampleParentComponent) {}

  onClick() {
    this.parent.text = 'Change ' + new Date();
  }
}
