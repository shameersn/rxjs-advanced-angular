import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-async-rx',
  templateUrl: './async-rx.component.html',
  styleUrls: ['./async-rx.component.scss']
})
export class AsyncRxComponent implements OnInit {

  constructor() { }
  /*
  Notes
  ========
  1. fromEvent create observable from dom events
  2. interval emits values in a given interval
  3. switchMap - switch to another observable after the first one emits
  4. takeUntil - will continue the observable before the specified observable hits
  */
  ngOnInit() {
    const start$ = fromEvent(document.getElementById('start'), 'click' );
    const timer$ = interval(1000);
    const stop$ = fromEvent(document.getElementById('stop'), 'click');
    const stopTimer$ = timer$.pipe(takeUntil(stop$));

    start$.pipe(
      switchMap(val => stopTimer$)
    ).subscribe(val => console.log(val));
  }

}
