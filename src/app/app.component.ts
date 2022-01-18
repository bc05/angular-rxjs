import { Component, OnDestroy, OnInit } from '@angular/core';

import { from, of, interval, pipe, range, Subscription, generate } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';

  ceps = [
    [
      72898899, 72897002, 72897004, 72897152, 72897154, 72897156, 72897158,
      72897160, 72897116, 72897118,
    ],
    [
      72897120, 72897122, 72897124, 72897162, 72897126, 72897128, 72897130,
      72897132, 72897134, 72897136, 72897138,
    ],
    [
      72897140, 72897142, 72897144, 72897146, 72897148, 72897150, 72897200,
      72897202, 72897204,
    ],
  ];

  constructor(private appService: AppService) {}

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      from<number[]>([1, 2, 3]).subscribe((value) => console.log('from', value))
    );

    this.subscription.add(
      of<number[]>([1, 2, 3]).subscribe((value) => console.log('of', value))
    );

    this.subscription.add(
      interval(1000)
        .pipe(take(10))
        .subscribe((value) => console.log('interval', value))
    );

    this.subscription.add(
      range(0, 8).subscribe((value) => console.log('range', value))
    );

    this.subscription.add(
      generate({
        initialState: 0,
        condition: (x) => x < 10,
        iterate: (x) => x + 1,
      }).subscribe((value) => console.log('generate', value))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
