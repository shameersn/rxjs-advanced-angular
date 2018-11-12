import { Component, Input, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { OnOffButtonComponent } from './on-off-button.component';
import { OffLabelComponent } from './off-label.component';
import { OnLabelComponent } from './on-label.component';

@Component({
  selector: 'app-on-off',
  template: `
    <ng-content></ng-content>
  `
})
export class OnOffComponent implements AfterContentInit {
  @Input() buttonOn: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(OnOffButtonComponent) onoffButton: OnOffButtonComponent;
  @ContentChild(OffLabelComponent) offLabel: OffLabelComponent;
  @ContentChild(OnLabelComponent) onLabel: OnLabelComponent;

  ngAfterContentInit() {
    this.onoffButton.toggle.subscribe(state => {
      this.buttonOn = state;
      this.toggle.emit(state);
      this.offLabel.buttonOn = state;
      this.onLabel.buttonOn = state;
    });
  }


}
