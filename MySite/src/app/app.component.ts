import { Component } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router'
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySite';
  routerEventSubscription : any;
  showSidebar: any;
  
  constructor(private _router:Router) {
    this.routerEventSubscription = this._router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .pipe(map((event: RoutesRecognized) => {
        return event.state.root.firstChild.data['showSidebar'];
      })).subscribe(showSidebar => {
        this.showSidebar = showSidebar;
      });
  }
}
