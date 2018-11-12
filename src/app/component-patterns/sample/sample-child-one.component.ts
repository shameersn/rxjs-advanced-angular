import { Component } from '@angular/core';
import { SampleParentComponent } from './sample-parent.component';

@Component({
  selector: 'app-sample-child-one',
  template: `<p>{{parent.text}} one</p>`
})
export class SampleChileOneComponent {
  constructor(public parent: SampleParentComponent) {}
}
