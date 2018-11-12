import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentPatternsComponent } from './component-patterns/component-patterns.component';
import { ToggleComponent } from './component-patterns/toggle/toggle.component';
import { OnOffModule } from './component-patterns/on-off/on-of.module';
import { SampleModule } from './component-patterns/sample/sample.module';
import { OtherComponent } from './component-patterns/other-component/other.component';
import { AsyncRxComponent } from './async-rx/async-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPatternsComponent,
    ToggleComponent,
    OtherComponent,
    AsyncRxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnOffModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
