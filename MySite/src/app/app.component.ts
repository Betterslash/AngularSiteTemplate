import { Component } from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router'
import {filter, map} from 'rxjs/operators'
import { User } from './_common/user.model';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySite';
  routerEventSubscription : any;
  showSidebar: any;
  currentUser:User;
  
  constructor(private _router:Router,  private authenticationService: AuthenticationService) {
    this.routerEventSubscription = this._router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .pipe(map((event: RoutesRecognized) => {
        return event.state.root.firstChild.data['showSidebar'];
      })).subscribe(showSidebar => {
        this.showSidebar = showSidebar;
      });
  }
  logout() {
    this.authenticationService.logout();
    this._router.navigate(['/login']);
}
}
