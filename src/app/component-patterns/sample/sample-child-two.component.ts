import { Component } from '@angular/core';
import { SampleParentComponent } from './sample-parent.component';

@Component({
  selector: 'app-sample-child-two',
  template: `<p>{{parent.text}} two</p>`
})
export class SampleChileTwoComponent {
  constructor(public parent: SampleParentComponent) {}
}
