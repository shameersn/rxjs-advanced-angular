import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentPatternsComponent } from './component-patterns/component-patterns.component';
import { AsyncRxComponent } from './async-rx/async-rx.component';

const routes: Routes = [
  {
    path: 'component-patterns',
    component: ComponentPatternsComponent
  },
  {
    path: 'async-rx',
    component: AsyncRxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
