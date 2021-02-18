import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
//   { path: '', component : MainViewComponent, data : {showSidebar : true}}, 
//   { path: 'home', component : MainViewComponent, data : {showSidebar : true}},    
//   { path: 'logged-in', component : LoggedInPageComponent, data : {showSidebar : true},  canActivate: [AuthGuard]},    
//   { path: '#', redirectTo: 'home', pathMatch : 'full'},

// { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
