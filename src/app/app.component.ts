import { Component, OnDestroy, OnInit } from '@angular/core';

import { from, of, interval, pipe } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';

  ngOnInit(): void {
    interval(1000).pipe(take(10));
    // .subscribe((value) => console.log(value))
    // .unsubscribe();
  }

  ngOnDestroy(): void {}

  // generate(limit: number = 10) {
  //   const numbers = [];
  //   while (numbers.length < limit) {
  //     numbers.push(numbers.length + 1);
  //   }

  //   return numbers;
  // }
}
