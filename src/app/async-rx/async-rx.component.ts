import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, merge, timer } from 'rxjs';
import { switchMap, takeUntil, scan, startWith, mapTo } from 'rxjs/operators';
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
  5. scan operator is like reduce which get an arrow function as well as an intializer, which then passed as an accumulator param
  6. startWith - starts with default data and directly pass to subscibe block the output
  7. mapTo - will help to map the acc to new behaviour (can an map an observeble to new behaviour)
  8. mege - if we want pass one or other observable can use merge

  */
  ngOnInit() {
    const start$ = fromEvent(document.getElementById('start'), 'click' );
    const timer$ = interval(1000);
    const stop$ = fromEvent(document.getElementById('stop'), 'click');
    const reset$ = fromEvent(document.getElementById('reset'), 'click');
    const stopTimer$ = timer$.pipe(takeUntil(stop$));
    const data = 0;
    const inc = (acc) => acc + 1;
    const reset  = (acc) => 0;

    start$.pipe(
      switchMap(val => {
        return merge(stopTimer$.pipe(mapTo(inc)), reset$.pipe(mapTo(reset)));
      }),
      startWith(data),
      scan((acc, curr: (acc: any) => {}) => {
        return  curr(acc);
      })
    ).subscribe(val => console.log(val));

    // const interval$ = intimeterval(1000);
    const interval$ = timer(2000, 1000);
    interval$.subscribe(val => console.log('val', val));
  }

}

/*

1. Stream of values - reactive programming based
2. const interval$ = interval(1000); -> emit number as values at specified time in milliseconds
3. timer(300, 10) wait for specified time and emit value @ specified interval
4. fromEvent - create observale from dom events
5. Observable is a blueprint for stream
6. subscribe -> recieve stream of values produced by observable -> subscribe recieve three call back for success, error and complete




 */
