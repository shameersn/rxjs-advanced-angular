import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleParentComponent } from './sample-parent.component';
import { SampleChildButtonComponent } from './sample-child-button.component';
import { SampleChileOneComponent } from './sample-child-one.component';
import { SampleChileTwoComponent } from './sample-child-two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SampleParentComponent,
    SampleChildButtonComponent,
    SampleChileOneComponent,
    SampleChileTwoComponent
  ],
  declarations: [
    SampleParentComponent,
    SampleChildButtonComponent,
    SampleChileOneComponent,
    SampleChileTwoComponent
  ]
})
export class SampleModule {
}
