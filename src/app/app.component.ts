import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  loadedFeature = 'recipe';
  subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log('in router');
          browserRefresh = !router.navigated;
        }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('in router onDestroy');

  }

  OnNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log(feature);
    console.log('onNavigate');
  }
}
