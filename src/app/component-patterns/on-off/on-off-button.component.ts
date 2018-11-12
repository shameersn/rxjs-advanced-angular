import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-on-off-button',
  template: `
    <button (click)="onClick()"> {{buttonOn ? 'ON' : 'OFF'}} </button>
  `
})
export class OnOffButtonComponent {
    @Input() buttonOn: boolean;
    @Output() toggle: EventEmitter<boolean> = new EventEmitter();

    onClick() {
      this.buttonOn = !this.buttonOn;
      this.toggle.emit(this.buttonOn);
    }
}
