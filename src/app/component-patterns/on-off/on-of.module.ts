import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { OnOffComponent } from './on-off.component';
import { OffLabelComponent } from './off-label.component';
import { OnLabelComponent } from './on-label.component';
import { OnOffButtonComponent } from './on-off-button.component';

@NgModule({
  declarations: [
    OnOffComponent,
    OffLabelComponent,
    OnLabelComponent,
    OnOffButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnOffComponent,
    OffLabelComponent,
    OnLabelComponent,
    OnOffButtonComponent,
  ]
})
export class OnOffModule {

}
