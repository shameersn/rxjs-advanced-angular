import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-parent',
  template: `<ng-content></ng-content>`
})
export class SampleParentComponent {
  text = 'From Parent';
}
