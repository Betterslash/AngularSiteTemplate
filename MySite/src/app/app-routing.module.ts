import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainViewComponent} from './main-view/main-view.component'
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';

const routes: Routes = [ 
  { path: '', component : MainViewComponent, data : {showSidebar : true}}, 
  { path: 'home', component : MainViewComponent, data : {showSidebar : true}},    
  { path: 'logged-in', component : LoggedInPageComponent, data : {showSidebar : true}},    
  { path: '#', redirectTo: 'home', pathMatch : 'full'},

{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
