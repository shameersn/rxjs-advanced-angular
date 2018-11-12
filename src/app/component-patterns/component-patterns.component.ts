import { Component } from '@angular/core';

@Component({
  selector: 'app-component-patterns',
  templateUrl: './component-patterns.component.html',
  styleUrls: ['./component-patterns.component.scss']
})
export class ComponentPatternsComponent {
  onToggled(checked) {
    console.log(checked);
  }

  onToggle(state) {
    console.log(state);
  }
}
