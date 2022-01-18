import { Component, OnDestroy, OnInit } from '@angular/core';

import { from, of, interval, pipe, Subscriber, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';

  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      interval(1000)
        .pipe(take(10))
        .subscribe((value) => console.log(value))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
