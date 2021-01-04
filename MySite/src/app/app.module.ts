import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { ModalModule } from './_modal';
import { ContactComponent } from './contact/contact.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MainViewComponent } from './main-view/main-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarLeftComponent,
    ContactComponent,
    LoginModalComponent,
    MainViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
